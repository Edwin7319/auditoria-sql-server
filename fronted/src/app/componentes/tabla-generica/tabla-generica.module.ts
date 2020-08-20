import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaGenericaComponent } from './tabla-generica.component';
import {TableModule} from "primeng";



@NgModule({
  declarations: [TablaGenericaComponent],
  exports: [
    TablaGenericaComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class TablaGenericaModule { }
