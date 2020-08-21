import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnomaliaDatosRoutingModule } from './anomalia-datos-routing.module';
import { AnomaliaDatosComponent } from './anomalia-datos.component';
import {TituloPantallaModule} from "../../componentes/titulo-pantalla/titulo-pantalla.module";
import {TablaGenericaModule} from "../../componentes/tabla-generica/tabla-generica.module";
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {TableModule} from 'primeng';


@NgModule({
  declarations: [
    AnomaliaDatosComponent
  ],
    imports: [
        CommonModule,
        AnomaliaDatosRoutingModule,
        TituloPantallaModule,
        TablaGenericaModule,
        MatCardModule,
        MatTabsModule,
        TableModule
    ],
  exports: [
    AnomaliaDatosComponent
  ]
})
export class AnomaliaDatosModule { }
