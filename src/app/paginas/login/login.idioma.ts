export class LoginIdioma {
    public titulo: string;
    public usuario: string;
    public clave: string;
    public iniciar: string;
    public errorLogin: string;
}

export class LoginIdiomaEs extends LoginIdioma {
    constructor() {
        super();
        this.titulo = 'Login';
        this.usuario = 'Usuario';
        this.clave = 'Clave';
        this.iniciar = 'Iniciar';
        this.errorLogin = 'Error en login';
    }
}

export class LoginIdiomaGl extends LoginIdioma {
    constructor() {
        super();
        this.titulo = 'Login';
        this.usuario = 'Usuario';
        this.clave = 'Contrasinal';
        this.iniciar = 'Iniciar';
        this.errorLogin = 'Erro no login';
    }
}

export class LoginIdiomaEn extends LoginIdioma {
    constructor() {
        super();
        this.titulo = 'Login';
        this.usuario = 'User';
        this.clave = 'Password';
        this.iniciar = 'Start';
        this.errorLogin = 'Login error';
    }
}





