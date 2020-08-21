import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnomaliaIntegridadRoutingModule } from './anomalia-integridad-routing.module';
import { AnomaliaIntegridadComponent } from './anomalia-integridad.component';
import {MatTabsModule} from '@angular/material/tabs';
import {TablaGenericaModule} from '../../componentes/tabla-generica/tabla-generica.module';
import {TituloPantallaModule} from '../../componentes/titulo-pantalla/titulo-pantalla.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AnomaliaIntegridadComponent
  ],
  imports: [
    CommonModule,
    AnomaliaIntegridadRoutingModule,
    MatTabsModule,
    TablaGenericaModule,
    TituloPantallaModule,
    MatCardModule
  ],
  exports: [
    AnomaliaIntegridadComponent
  ]
})
export class AnomaliaIntegridadModule { }
