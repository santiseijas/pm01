import { Params } from './../../lib/params';
export class MenuParams extends Params {

    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false,
    };

    constructor() {
        super('/menu');
    }
}
