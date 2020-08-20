import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnomaliaIntegridadRoutingModule } from './anomalia-integridad-routing.module';
import { AnomaliaIntegridadComponent } from './anomalia-integridad.component';


@NgModule({
  declarations: [
    AnomaliaIntegridadComponent
  ],
  imports: [
    CommonModule,
    AnomaliaIntegridadRoutingModule
  ],
  exports: [
    AnomaliaIntegridadComponent
  ]
})
export class AnomaliaIntegridadModule { }
