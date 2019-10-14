import { ClientesParams } from './clientes.params';
import { ClientesIdioma, ClientesIdiomaEn, ClientesIdiomaGl, ClientesIdiomaEs } from './clientes.idioma';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  public textosIdioma: ClientesIdioma;
  private clientesParams: ClientesParams;
  public items = [
    {nombre: 'Luis',
    apellidos: 'Estevez',
    telefono: '12345'},
    {nombre: 'Ana',
    apellidos: 'Gomez',
    telefono: '54321'}
    
  ];

  constructor(private datosApp: DatosAppService) { 
      this.setIdioma();
      this.clientesParams = datosApp.pilaParams.getTop() as ClientesParams;
  }

  ngOnInit() {
  }

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new ClientesIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new ClientesIdiomaGl();
                      break;
      default: this.textosIdioma = new ClientesIdiomaEs();
    }
  }

  public volverClick() {
    this.clientesParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

}
