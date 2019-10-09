export class LoginIdioma {
    public titulo: string;
    public nombre: string;
    public contrasena: string;
    public iniciar: string
}

export class LoginIdiomaEs extends LoginIdioma {
    constructor() {
        super();
        this.titulo = "Login";
        this.nombre = 'Usuario';
        this.contrasena = 'Clave';
        this.iniciar = 'Iniciar'

    }
}

export class LoginIdiomaGall extends LoginIdioma {
    constructor() {
        super();
        this.titulo = "Login";
        this.nombre = 'Usuario';
        this.contrasena = 'Contrasinal';
        this.iniciar = 'Iniciar'

    }
}

export class LoginIdiomaEn extends LoginIdioma {
    constructor() {
        super();
        this.titulo = "Login";
        this.nombre = 'User';
        this.contrasena = 'Password';
        this.iniciar = 'Start'

    }
}