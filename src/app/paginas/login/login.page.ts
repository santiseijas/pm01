import { LoginParams } from './login.params';
import { LoginIdioma, LoginIdiomaEn, LoginIdiomaGl, LoginIdiomaEs } from './login.idioma';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { Component, OnInit } from '@angular/core';
import { MenuParams } from '../menu/menu.params';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public textosIdioma: LoginIdioma;
  private loginParams: LoginParams;
  private menuParams: MenuParams;
  public form = {
    usuario: '',
    clave: ''
  };
  constructor(private datosApp: DatosAppService) {
    this.setIdioma();
    this.loginParams = this.datosApp.pilaParams.getTop() as LoginParams;
    this.menuParams = null;
  }

  ngOnInit() {
  }

  private ionViewDidEnter() {
    if ((this.menuParams !== null) &&
    ((this.menuParams.parametrosSalida.ok) ||
    (this.menuParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/
  
      this.menuParams = null;
    }
  
  }

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new LoginIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new LoginIdiomaGl();
                      break;
      default: this.textosIdioma = new LoginIdiomaEs();
    }
  }

  public volverClick() {
    this.loginParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public menuClick() {
    if ((this.form.usuario === 'ana') &&
    (this.form.clave === '12345')) {
      this.menuParams = new MenuParams();
      this.datosApp.pilaParams.push(this.menuParams);
    } else {
        this.datosApp.util.mensajeError(this.textosIdioma.errorLogin);
    }
  }

}
