import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnomaliaIntegridadComponent} from './anomalia-integridad.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: AnomaliaIntegridadComponent
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
export class AnomaliaIntegridadRoutingModule {
}
