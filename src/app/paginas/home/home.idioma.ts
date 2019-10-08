export class HomeIdioma {
    public nombreApp: string;
    public bienvenido: string;
    public iniciar: string;
}

export class HomeIdiomaEs extends HomeIdioma {
    constructor() {
        super();
        this.nombreApp = 'Dual App';
        this.bienvenido = 'Bienvenidos a DualSoft';
        this.iniciar = 'Iniciar';
    }
}

export class HomeIdiomaGl extends HomeIdioma {
    constructor() {
        super();
        this.nombreApp = 'Dual App';
        this.bienvenido = 'Benvidos a DualSoft';
        this.iniciar = 'Comezar';
    }
}

export class HomeIdiomaEn extends HomeIdioma {
    constructor() {
        super();
        this.nombreApp = 'Dual App';
        this.bienvenido = 'Welcome to DualSoft';
        this.iniciar = 'Start';
    }
}