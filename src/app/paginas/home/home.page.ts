import { LoginParams } from './../login/login.params';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { Component } from '@angular/core';
import { HomeIdioma, HomeIdiomaEn, HomeIdiomaGl, HomeIdiomaEs } from './home.idioma';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public textosIdioma: HomeIdioma;
  private loginParams: LoginParams;


  constructor(private datosApp: DatosAppService ) {
    datosApp.idioma = Idioma.ES;
    this.loginParams = null;
    this.setIdioma();
  }

private ionViewDidEnter() {
  if ((this.loginParams !== null) &&
  ((this.loginParams.parametrosSalida.ok) ||
  (this.loginParams.parametrosSalida.cancelar))) {
    /* Realizar acciones*/

    this.loginParams = null;
  }

}


  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new HomeIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new HomeIdiomaGl();
                      break;
      default: this.textosIdioma = new HomeIdiomaEs();
    }
  }

  async botonIdiomaClick() {
    const actionSheet = await this.datosApp.actionSheetController.create({
      header: this.textosIdioma.seleccioneIdioma,
      buttons: [{
        text: 'Español',
        icon: 'flag',
        handler: () => {
            this.datosApp.idioma = Idioma.ES;
            this.setIdioma();
        }
      }, {
        text: 'Galego',
        icon: 'flag',
        handler: () => {
          this.datosApp.idioma = Idioma.GL;
          this.setIdioma();
        }
      }, {
        text: 'English',
        icon: 'flag',
        handler: () => {
          this.datosApp.idioma = Idioma.EN;
          this.setIdioma();
        }
      }]
    });
    await actionSheet.present();
  }

  public loginClick() {
    this.loginParams = new LoginParams();
    this.datosApp.pilaParams.push(this.loginParams);
  }





}
