import {Component, OnInit} from '@angular/core';
import {ServicioPrincipalService} from '../../servicios/servicio-principal.service';
import {RELACIONES_REQUIRE_INTEGRIDAD_REFERENCIAL} from '../../constantes/queries-auditoria/relaciones-requieren-integridad-referencial';
import {OBTENER_TRIGGERS} from '../../constantes/queries-auditoria/triggers';

@Component({
  selector: 'app-anomalia-datos',
  templateUrl: './anomalia-datos.component.html',
  styleUrls: ['./anomalia-datos.component.scss']
})
export class AnomaliaDatosComponent implements OnInit {

  columnas = [
    {
      field: 'nombre_tabla',
      header: 'Nombre de tabla',
    },
    {
      field: 'nombre_trigger',
      header: 'Nombre de trigger',
    },
    {
      field: 'tipo_trigger',
      header: 'Tipo desencadenador',
    },
    {
      field: 'script_trigger',
      header: 'Script de trigger',
    },
  ];

  data: any[] = [];

  constructor(
    private readonly _servicioPrincipal: ServicioPrincipalService
  ) {
  }

  ngOnInit() {
    this.obtenerTriggersDeDB();
  }

  obtenerTriggersDeDB() {
    const cuerpo = {
      consulta: OBTENER_TRIGGERS
    };

    const servicioPrincipal$ = this._servicioPrincipal
      .obtenerRespuestaAuditoria(cuerpo);

    servicioPrincipal$
      .subscribe(
        (respuesta) => {
          console.log(respuesta);
          this.data = respuesta;
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
