import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'anomalia-datos',
    loadChildren: () => import(
        './modulos/anomalia-datos/anomalia-datos.module'
        )
        .then(
          mod => mod.AnomaliaDatosModule
        )
  },
  {
    path: 'anomalia-relacional',
    loadChildren: () => import(
        './modulos/anomalia-relacional/anomalia-relacional.module'
        )
        .then(
          mod => mod.AnomaliaRelacionalModule
        )
  },
  {
    path: '',
    redirectTo: 'anomalia-relacional',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
