import { ClientesParams } from './../clientes/clientes.params';
import { MenuIdioma, MenuIdiomaEn, MenuIdiomaGl, MenuIdiomaEs } from './menu.idioma';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';

import { Component, OnInit } from '@angular/core';
import { MenuParams } from './menu.params';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public textosIdioma: MenuIdioma;
  private menuParams: MenuParams;
  private clientesParams: ClientesParams;
  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.menuParams = datosApp.pilaParams.getTop() as MenuParams;
    this.clientesParams = null;
  }

  ngOnInit() {
  }

  private ionViewDidEnter() {
    if ((this.clientesParams !== null) &&
    ((this.clientesParams.parametrosSalida.ok) ||
    (this.clientesParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/

      this.clientesParams = null;
    }

  }

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new MenuIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new MenuIdiomaGl();
                      break;
      default: this.textosIdioma = new MenuIdiomaEs();
    }
  }

  public volverClick() {
    this.menuParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public clientesClick(){
    this.clientesParams = new ClientesParams();
    this.datosApp.pilaParams.push(this.clientesParams);

  }

}
