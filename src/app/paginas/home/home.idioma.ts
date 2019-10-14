export class HomeIdioma {
    public nombreApp: string;
    public bienvenido: string;
    public iniciar: string;
    public idioma: string;
    public seleccioneIdioma: string;
}

export class HomeIdiomaEs extends HomeIdioma {
    constructor() {
        super();
        this.nombreApp = 'Dual App';
        this.bienvenido = 'Bienvenidos a DualSoft';
        this.iniciar = 'Iniciar';
        this.idioma = 'Idioma';
        this.seleccioneIdioma = 'Seleccione Idioma';
    }
}

export class HomeIdiomaGl extends HomeIdioma {
    constructor() {
        super();
        this.nombreApp = 'Dual App';
        this.bienvenido = 'Benvidos a DualSoft';
        this.iniciar = 'Comezar';
        this.idioma = 'Idioma';
        this.seleccioneIdioma = 'Seleccione Idioma';
    }
}

export class HomeIdiomaEn extends HomeIdioma {
    constructor() {
        super();
        this.nombreApp = 'Dual App';
        this.bienvenido = 'Welcome to DualSoft';
        this.iniciar = 'Start';
        this.idioma = 'Language';
        this.seleccioneIdioma = 'Select language';
    }
}





