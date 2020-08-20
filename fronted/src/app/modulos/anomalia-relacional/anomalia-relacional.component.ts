import {Component, OnInit} from '@angular/core';
import {ServicioPrincipalService} from "../../servicios/servicio-principal.service";
import {RELACIONES_REQUIRE_INTEGRIDAD_REFERENCIAL} from "../../constantes/queries-auditoria/relaciones-requieren-integridad-referencial";
import {TABLA_SIN_RELACIONES_V2} from "../../constantes/queries-auditoria/tabla_suelta_v2";

@Component({
  selector: 'app-anomalia-relacional',
  templateUrl: './anomalia-relacional.component.html',
  styleUrls: ['./anomalia-relacional.component.scss']
})
export class AnomaliaRelacionalComponent implements OnInit {

  columnas = [
    {
      field: 'TABLA',
      header: 'Nombre de tabla',
    },
    {
      field: 'COLUMNA',
      header: 'Columna',
    },
    {
      field: 'TABLA_REFERENCIADA',
      header: 'Tabla referenciada',
    },
    {
      field: 'COLUMNA_REFERENCIADA',
      header: 'Columna referenciada',
    },
    {
      field: 'FK_CONSTRAINT',
      header: 'FK constraint',
    },
    {
      field: 'DESHABILITADO',
      header: 'FK deshabilitada',
    },
    // {
    //   field: 'ESQUEMA',
    //   header: 'Esquema',
    // },
    {
      field: 'POSIBLE_INCONSISTENCIA',
      header: 'Posible inconsistencia',
    },
  ];
  datos: any[] = [];

  columnasTablaSinReferencias = [
    {
      field: 'TABLE_NAME',
      header: 'Nombre de tabla',
    },
    {
      field: 'DESCRIPCION',
      header: 'Descripción',
    },
  ]

  datosTablasSinReferencias: any[] = [];

  constructor(
    private readonly _servicioPrincipal: ServicioPrincipalService,
  ) {
  }

  ngOnInit(): void {
    this.obtenerAnomaliaDeConstrains();
    this.obtenerTablasSinRelaciones();
  }

  obtenerAnomaliaDeConstrains() {
    const cuerpo = {
      consulta: RELACIONES_REQUIRE_INTEGRIDAD_REFERENCIAL,
    }
    const servicioPrincipal$ = this._servicioPrincipal
      .obtenerRespuestaAuditoria(cuerpo);

    servicioPrincipal$
      .subscribe(
        (respuesta) => {
          this.datos = respuesta;
        },
        error => {
          console.error({
            mensaje: 'Error recuperando datos de integridad referencial',
            error
          });
        }
      );
  }

  obtenerTablasSinRelaciones() {
    const cuerpo = {
      consulta: TABLA_SIN_RELACIONES_V2,
    }

    const servicioPrincipal$ = this._servicioPrincipal
      .obtenerRespuestaAuditoria(cuerpo);

    servicioPrincipal$
      .subscribe(
        (respuesta) => {
          this.datosTablasSinReferencias = respuesta;
        },
        error => {
          console.error({
            mensaje: 'Error recuperando datos de integridad referencial',
            error
          });
        }
      );
  }
}
