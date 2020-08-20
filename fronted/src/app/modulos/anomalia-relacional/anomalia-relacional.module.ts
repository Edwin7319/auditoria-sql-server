import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnomaliaRelacionalRoutingModule} from './anomalia-relacional-routing.module';
import {AnomaliaRelacionalComponent} from './anomalia-relacional.component';
import {TituloPantallaModule} from "../../componentes/titulo-pantalla/titulo-pantalla.module";
import {TablaGenericaModule} from "../../componentes/tabla-generica/tabla-generica.module";
import {TableModule} from "primeng";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    AnomaliaRelacionalComponent
  ],
  imports: [
    CommonModule,
    AnomaliaRelacionalRoutingModule,
    TituloPantallaModule,
    TablaGenericaModule,
    TableModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    AnomaliaRelacionalComponent
  ]
})
export class AnomaliaRelacionalModule {
}
