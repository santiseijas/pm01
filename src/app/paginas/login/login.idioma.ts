export class LoginIdioma {
    public titulo: string;
    public nombre: string;
    public contraseña: string;
    public iniciar: string
}

export class LoginIdiomaEs extends LoginIdioma {
    constructor() {
        super();
        this.titulo = "Login";
        this.nombre = 'Usuario';
        this.contraseña = 'Clave';
        this.iniciar = 'Iniciar'

    }
}

export class LoginIdiomaGall extends LoginIdioma {
    constructor() {
        super();
        this.titulo = "Login";
        this.nombre = 'Usuario';
        this.contraseña = 'Contrasinal';
        this.iniciar = 'Iniciar'

    }
}

export class LoginIdiomaEn extends LoginIdioma {
    constructor() {
        super();
        this.titulo = "Login";
        this.nombre = 'User';
        this.contraseña = 'Password';
        this.iniciar = 'Start'

    }
}