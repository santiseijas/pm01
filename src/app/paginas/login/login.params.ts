import { Params } from './../../lib/params';
export class LoginParams extends Params{

    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false,
    };

    constructor() {
        super('/login');
    }
}
