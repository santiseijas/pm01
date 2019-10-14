import { NavController, ActionSheetController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { PilaParams } from '../lib/pila-params';
import { HomeParams } from '../paginas/home/home.params';
import { Util } from '../lib/util';

export enum Idioma {
  ES = 'ES',
  GL = 'GL',
  EN = 'EN'
}


@Injectable({
  providedIn: 'root'
})
export class DatosAppService {
  public version: string;
  public idioma: Idioma;
  public pilaParams: PilaParams;
  public util: Util;

  constructor(public navCtrl: NavController,
              public actionSheetController: ActionSheetController,
              public toastController: ToastController) {
    this.version = '1.0';
    this.idioma = Idioma.ES;
    this.pilaParams = new PilaParams(navCtrl);
    this.pilaParams.push(new HomeParams());
    this.util = new Util(toastController);
   }
}
