import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {ServicioPrincipalService} from './servicios/servicio-principal.service';
import {BarraLateralModule} from './componentes/barra-lateral/barra-lateral.module';
import {NzButtonModule, NzIconModule, NzWaveModule} from 'ng-zorro-antd';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BarraLateralModule,
    NzWaveModule,
    NzButtonModule,
    NzIconModule,
  ],
  providers: [
    ServicioPrincipalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
