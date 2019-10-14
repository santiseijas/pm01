import { Params } from './../../lib/params';
export class HomeParams extends Params{

    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false
    };

    constructor() {
        super('/home');
    }
}
