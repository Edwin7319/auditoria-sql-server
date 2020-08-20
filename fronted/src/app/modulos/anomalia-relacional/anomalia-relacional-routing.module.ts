import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnomaliaRelacionalComponent} from "./anomalia-relacional.component";


const routes: Routes = [
  {
    path: 'inicio',
    component: AnomaliaRelacionalComponent
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
export class AnomaliaRelacionalRoutingModule {
}
