import { Params } from './params';
import { NavController } from '@ionic/angular';
export class PilaParams {
    private pila: Params[] = [];
    private navCtrl: NavController;
    constructor(navCtrl: NavController) {
        this.navCtrl = navCtrl;
    }

    public push(params: Params) {
        this.pila.push(params);
        this.navCtrl.navigateForward(params.getRuta());
    }

    public pop() {
        this.pila.pop();
        this.navCtrl.navigateBack(this.getTop().getRuta());
    }

    public getTop(): Params {
        return this.pila[this.pila.length - 1];
    }

}