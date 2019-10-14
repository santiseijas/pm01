export class MenuIdioma {
    public titulo: string;
    public clientes: string;
    public trabajadores: string;
    public articulos: string;
}

export class MenuIdiomaEs extends MenuIdioma {
    constructor() {
        super();
        this.titulo = 'Menú';
        this.clientes = 'Clientes';
        this.trabajadores = 'Trabajadores';
        this.articulos = 'Artículos';
        
    }
}

export class MenuIdiomaGl extends MenuIdioma {
    constructor() {
        super();
        this.titulo = 'Menú';
        this.clientes = 'Clientes';
        this.trabajadores = 'Traballadores';
        this.articulos = 'Artigos';
    }
}

export class MenuIdiomaEn extends MenuIdioma {
    constructor() {
        super();
        this.titulo = 'Menu';
        this.clientes = 'Clients';
        this.trabajadores = 'Workers';
        this.articulos = 'Items';
    }
}





