import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPantallaComponent } from './titulo-pantalla.component';



@NgModule({
    declarations: [TituloPantallaComponent],
    exports: [
        TituloPantallaComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TituloPantallaModule { }
