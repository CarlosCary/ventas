
class Producto {
    constructor(){
    }

    estaDispobible(){
        return true;
    }
}
class Venta {
    
    constructor() {
        this.producto = new Producto();
    }

    productosEstanDispobible(){
        return this.producto.estaDispobible();
    }
    
    total() {
        return 0;
    }
}
module.exports = Venta;
