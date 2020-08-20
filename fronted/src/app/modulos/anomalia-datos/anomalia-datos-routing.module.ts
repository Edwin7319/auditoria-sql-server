import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnomaliaDatosComponent} from "./anomalia-datos.component";


const routes: Routes = [
  {
    path: 'inicio',
    component: AnomaliaDatosComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnomaliaDatosRoutingModule { }
