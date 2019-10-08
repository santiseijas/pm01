
import {
  HomeIdioma,
  HomeIdiomaEs,
  HomeIdiomaEn,
  HomeIdiomaGl
} from './home.idioma';
import { Component } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
// import { InicioPage } from '../inicio/inicio.page';
import { DatosAppService } from 'src/app/datos/datos-app.service';

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
  public texto: string;
  public submitTxt: string;
  public nombre: string;
  private esHola: boolean;
  private idioma: Idioma;
  public textosIdioma: HomeIdioma;
  // private inicioParams: InicioParams;


  constructor(
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private datosApp: DatosAppService
  ) {
    this.texto = 'Hola mundo';
    this.submitTxt = 'Submit';
    this.esHola = true;
    this.idioma = Idioma.EN;
    this.setIdioma();
  }

  public cambiaTexto(txt: string) {
    this.texto = txt;
  }

  public cambia() {
    this.esHola
      ? ((this.texto = 'Adios'), (this.esHola = false))
      : ((this.texto = 'Hola'), (this.esHola = true));
    console.log(this.nombre);
  }

  public handleOnClick() {
    // this.inicioParams = new InicioParams;
    // this.datosApp.pilaParams.push(this.inicioParams);
  }

  private setIdioma() {
    switch (this.idioma) {
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
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [
        {
          text: 'Español',
          icon: 'flag',
          handler: () => {
            this.idioma = Idioma.ES;
            this.setIdioma();
          }
        },
        {
          text: 'English',
          icon: 'flag',
          handler: () => {
            this.idioma = Idioma.EN;
            this.setIdioma();
          }
        },
        {
          text: 'Galego',
          icon: 'flag',
          handler: () => {
            this.idioma = Idioma.GL;
            this.setIdioma();
          }
        }
      ]
    });
    await actionSheet.present();
  }
}