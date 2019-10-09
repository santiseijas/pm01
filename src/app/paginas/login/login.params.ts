import { Params } from 'src/app/lib/params';

export class LoginParams extends Params {

    public parametrosEntrada = {


    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/login');
    }
}