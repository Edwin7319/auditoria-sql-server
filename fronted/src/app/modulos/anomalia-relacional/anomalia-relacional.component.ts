import {Component, OnInit} from '@angular/core';
import {ServicioPrincipalService} from '../../servicios/servicio-principal.service';
import {RELACIONES_REQUIRE_INTEGRIDAD_REFERENCIAL} from '../../constantes/queries-auditoria/relaciones-requieren-integridad-referencial';
import {TABLA_SIN_RELACIONES_V2} from '../../constantes/queries-auditoria/tabla_suelta_v2';
import {RELACIONES_NECESARIAS_V2} from '../../constantes/queries-auditoria/relaciones-necesarias-v2';

@Component({
  selector: 'app-anomalia-relacional',
  templateUrl: './anomalia-relacional.component.html',
  styleUrls: ['./anomalia-relacional.component.scss']
})
export class AnomaliaRelacionalComponent implements OnInit {

  columnas = [
    {
      field: 'tabla',
      header: 'Nombre de tabla',
    },
    {
      field: 'columna',
      header: 'Columna',
    },
    {
      field: 'relacion_tabla',
      header: 'Tabla referenciada',
    },
    {
      field: 'relacion_columna',
      header: 'Columna referenciada',
    },
    {
      field: 'obj_name',
      header: 'FK constraint',
    },
    {
      field: 'fk_deshabilitada',
      header: 'FK deshabilitada',
    },
    // {
    //   field: 'ESQUEMA',
    //   header: 'Esquema',
    // },
    {
      field: 'posible_inconsistencia',
      header: 'Posible inconsistencia',
    },
  ];
  datos: any[] = [];

  columnasTablaSinReferencias = [
    {
      field: 'nombre_tabla',
      header: 'Nombre de tabla',
    },
    {
      field: 'descripcion',
      header: 'Descripción',
    },
  ];

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
    };
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
    };

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
