import { Params } from './../../lib/params';
export class ClientesParams extends Params{

    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false,
    };

    constructor() {
        super('/clientes');
    }
}
