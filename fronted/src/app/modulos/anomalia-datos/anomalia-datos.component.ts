import {Component, OnInit} from '@angular/core';
import {ServicioPrincipalService} from "../../servicios/servicio-principal.service";
import {RELACIONES_REQUIRE_INTEGRIDAD_REFERENCIAL} from "../../constantes/queries-auditoria/relaciones-requieren-integridad-referencial";

@Component({
  selector: 'app-anomalia-datos',
  templateUrl: './anomalia-datos.component.html',
  styleUrls: ['./anomalia-datos.component.scss']
})
export class AnomaliaDatosComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
