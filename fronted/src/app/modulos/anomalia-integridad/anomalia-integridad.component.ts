import {Component, OnInit} from '@angular/core';
import {ServicioPrincipalService} from '../../servicios/servicio-principal.service';
import {ANOMALIAS_INTEGRIDAD} from '../../constantes/queries-auditoria/anomalias-integridad';

@Component({
  selector: 'app-anomalia-integridad',
  templateUrl: './anomalia-integridad.component.html',
  styleUrls: ['./anomalia-integridad.component.scss']
})
export class AnomaliaIntegridadComponent implements OnInit {

  data: any[] = [];

  columnas = [
    {
      field: 'tabla',
      header: 'Nombre de tabla',
    },
    {
      field: 'columna',
      header: 'Nombre de columna',
    },
    {
      field: 'tabla_referenciada',
      header: 'Nombre de tabla referenciada',
    },
    {
      field: 'columna_referenciada',
      header: 'Nombre de columna referenciada',
    },
    {
      field: 'fk_constraint',
      header: 'FK constraint',
    },
    {
      field: 'update',
      header: 'Update',
    },
    {
      field: 'delete',
      header: 'Delete',
    },
  ];

  constructor(
    private readonly _servicioPrincipal: ServicioPrincipalService,
  ) {
  }

  ngOnInit(): void {
    this.obtenerAnomaliasIntegridadReferencial();
  }

  obtenerAnomaliasIntegridadReferencial() {
    const cuerpo = {
      consulta: ANOMALIAS_INTEGRIDAD
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
