import { HomeParams } from './../paginas/home/home.params';
import { NavController } from '@ionic/angular';
import { PilaParams } from './../lib/pila-params';
import { Injectable } from '@angular/core';

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

  constructor(private navControl: NavController) {
    this.version = '1.0';
    this.idioma = Idioma.ES;
    this.pilaParams = new PilaParams(navControl);
    this.pilaParams.push(new HomeParams());
  }
}