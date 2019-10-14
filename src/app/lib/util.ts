import { ToastController } from '@ionic/angular';

export class Util {
    private toastController: ToastController;
    constructor(toastController: ToastController) {
        this.toastController = toastController;
    }

    async mensajeError(mensaje: string) {
        const toast = await this.toastController.create({
          message: mensaje,
          color: 'danger',
          duration: 2000
        });
        toast.present();
      }

}