import { LoginParams } from './login.params';
import { Idioma } from './../../datos/datos-app.service';
import { LoginIdioma, LoginIdiomaEs, LoginIdiomaEn, LoginIdiomaGall } from './login.idioma';
import { DatosAppService } from 'src/app/datos/datos-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public textosIdioma: LoginIdioma;
  private loginParams: LoginParams;
  public form = {
    usuario: '',
    clave: ''
  }

  constructor(private datosApp: DatosAppService) {
    this.setIdioma();
    this.loginParams = this.datosApp.pilaParams.getTop() as LoginParams;
  }

  ngOnInit() {
  }

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN:
        this.textosIdioma = new LoginIdiomaEn();
        break;
      case Idioma.GL:
        this.textosIdioma = new LoginIdiomaGall();
        break;
      default:
        this.textosIdioma = new LoginIdiomaEs();
    }
  }

  public volverClick() {
    this.loginParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }


}
