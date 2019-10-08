import { Params } from './params';
import { NavController } from '@ionic/angular';

export class PilaParams {
    private pila: Params[] = [];
    private navControl: NavController;
    constructor(navControl: NavController) {
        this.navControl = navControl;

    }

    public push(params: Params) {
        this.pila.push(params);
        this.navControl.navigateForward(params.getRuta());

    }

    public pop() {
        this.pila.pop();
        this.navControl.navigateBack(this.getTop().getRuta());

    }

    public getTop(): Params {
        return this.pila[this.pila.length - 1]
    }
}