
import {
  HomeIdioma,
  HomeIdiomaEs,
  HomeIdiomaEn,
  HomeIdiomaGl
} from './home.idioma';
import { Component } from '@angular/core';
// import { InicioPage } from '../inicio/inicio.page';
import { DatosAppService } from 'src/app/datos/datos-app.service';
import { LoginParams } from '../login/login.params';

enum Idioma {
  ES = 'ES',
  GL = 'GL',
  EN = 'EN'
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public nombre: string;

  public textosIdioma: HomeIdioma;
  private loginParams: LoginParams;


  constructor(

    private datosApp: DatosAppService
  ) {
    this.loginParams = null;
    this.datosApp.idioma = Idioma.ES;
    this.setIdioma();
  }


  public loginClick() {
    this.loginParams = new LoginParams;
    this.datosApp.pilaParams.push(this.loginParams);
  }

  private ionViewDidEnter() {//metodo que se autoejecuta cada vez que se vuelve a la ventana de home
    if ((this.loginParams !== null) &&
      ((this.loginParams.parametrosSalida.ok) ||
        (this.loginParams.parametrosSalida.cancelar))) {
      console.log("hemos vuelto");
      this.loginParams = null;
    }
  }

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.ES:
        this.textosIdioma = new HomeIdiomaEs();
        break;
      case Idioma.EN:
        this.textosIdioma = new HomeIdiomaEn();
        break;
      case Idioma.GL:
        this.textosIdioma = new HomeIdiomaGl();
        break;
      default:
        this.textosIdioma = new HomeIdiomaEs();
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.datosApp.actionSheetController.create({
      header: 'Idiomas',
      buttons: [
        {
          text: 'Español',
          icon: 'flag',
          handler: () => {
            this.datosApp.idioma = Idioma.ES;
            this.setIdioma();
          }
        },
        {
          text: 'English',
          icon: 'flag',
          handler: () => {
            this.datosApp.idioma = Idioma.EN;
            this.setIdioma();
          }
        },
        {
          text: 'Galego',
          icon: 'flag',
          handler: () => {
            this.datosApp.idioma = Idioma.GL;
            this.setIdioma();
          }
        }
      ]
    });
    await actionSheet.present();
  }
}