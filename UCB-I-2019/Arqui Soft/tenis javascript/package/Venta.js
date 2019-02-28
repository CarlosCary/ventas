
class Producto {
    constructor(){
    }

    estaDispobible(){
        return true;
    }
}

class Articulo extends Producto {
}

class Venta {
    
    constructor() {
        this.articulo = new Articulo();
    }

    productosEstanDispobible(){
        return this.articulo.estaDispobible();
    }
    
    total() {
        return 0;
    }
}
module.exports = Venta;
