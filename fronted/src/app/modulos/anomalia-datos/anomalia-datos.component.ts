import {Component, OnInit} from '@angular/core';
import {ServicioPrincipalService} from '../../servicios/servicio-principal.service';
import {RELACIONES_REQUIRE_INTEGRIDAD_REFERENCIAL} from '../../constantes/queries-auditoria/relaciones-requieren-integridad-referencial';
import {OBTENER_TRIGGERS} from '../../constantes/queries-auditoria/triggers';
import {TRIGGER_COMPLETO} from '../../constantes/queries-auditoria/triggers-completo';
import {CHECK_CONSTRAINS} from '../../constantes/queries-auditoria/check-contrains';

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

  columnasTriggerCompleto = [
    // {
    //   field: 'table_name',
    //   header: 'Nombre de tabla',
    // },
    {
      field: 'trigger_name',
      header: 'Nombre del trigger',
    },
    // {
    //   field: 'trigger_owner',
    //   header: 'Owner',
    // },
    // {
    //   field: 'table_schema',
    //   header: 'Esquema',
    // },
    {
      field: 'isUpdate',
      header: 'Es actualizar',
    },
    {
      field: 'isDelete',
      header: 'Es eliminar',
    },
    {
      field: 'isInsert',
      header: 'Es insertar',
    },
    {
      field: 'isAfter',
      header: 'Es after insert',
    },
    {
      field: 'isInsteadOf',
      header: 'Es instead of',
    },
    {
      field: 'disabled',
      header: 'Estado',
    },
  ];

  dataTriggerCompleto: any[] = [];

  columnasCheck = [
    {
      field: 'tabla',
      header: 'Nombre tabla',
    },
    {
      field: 'constraint_name',
      header: 'Nombre constraint',
    },
    {
      field: 'nombre_columna',
      header: 'Nombre columna',
    },
    {
      field: 'definicion',
      header: 'Regla',
    },
    {
      field: 'estado',
      header: 'Estado',
    },
  ];

  dataCheck: any[] = [];

  exportColumns: any[];

  products: any[];

  constructor(
    private readonly _servicioPrincipal: ServicioPrincipalService
  ) {
  }

  ngOnInit() {
    this.obtenerTriggersDeDB();
    this.obtenerInfoTriggersCompleto();
    this.obtenerInfoCheck();
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

  obtenerInfoTriggersCompleto() {
    const cuerpo = {
      consulta: TRIGGER_COMPLETO
    };

    const servicioPrincipal$ = this._servicioPrincipal
      .obtenerRespuestaAuditoria(cuerpo);

    servicioPrincipal$
      .subscribe(
        (respuesta) => {
          console.log(respuesta);
          this.dataTriggerCompleto = respuesta;
        },
        error => {
          console.error({
            mensaje: 'Error recuperando datos de integridad referencial',
            error
          });
        }
      );
  }

  obtenerInfoCheck() {
    const cuerpo = {
      consulta: CHECK_CONSTRAINS
    };

    const servicioPrincipal$ = this._servicioPrincipal
      .obtenerRespuestaAuditoria(cuerpo);

    servicioPrincipal$
      .subscribe(
        (respuesta) => {
          console.log(respuesta);
          this.dataCheck = respuesta;
        },
        error => {
          console.error({
            mensaje: 'Error recuperando datos de integridad referencial',
            error
          });
        }
      );
  }

  exportPdf() {
    import('jspdf').then(jsPDF => {
      import('jspdf-autotable').then(x => {
        const doc = new jsPDF.default('l');
        doc.autoTable(this.exportColumns, this.products);
        doc.save('products.pdf');
      });
    });
  }
}
