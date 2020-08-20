import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent implements OnInit {

  ocultar = false;

  constructor(
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
  }

  cambiarEstadoOcultar(): void {
    this.ocultar = !this.ocultar;
  }

  irARutaHija(tipo: 'relacional' | 'datos' | 'insercion') {
    let ruta;
    switch (tipo) {
      case 'relacional':
        ruta = '/anomalia-relacional';
        break;
      case 'datos':
        ruta = '/anomalia-datos';
        break;
      case 'insercion':
        ruta = '/anomalia-insercion';
        break;
    }
    this._router.navigate([ruta]);
  }
}
