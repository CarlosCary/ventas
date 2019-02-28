
class Producto {
    constructor(){
    }

    estaDispobible(){
        return true;
    }
    calcularTarifa(){
    }
}

class Articulo extends Producto {
    calcularTarifa(cantidad) {
        return cantidad * 10;
    }
}

class Servicio extends Producto {
    calcularTarifa(cantidad) {
        return cantidad * 20;
    }
}

class Venta {
    
    constructor() {
        this.articulo = new Articulo();
        this.servicio = new Servicio();
    }

    productosEstanDispobible(){
        return this.articulo.estaDispobible();
    }

    totalArticulos(cantidadArticulos) {
        return this.articulo.calcularTarifa(cantidadArticulos);
    }

    totalServicios(cantidadServicios) {
        return this.servicio.calcularTarifa(cantidadServicios);
    }

    total() {
        return 0;
    }
}
module.exports = Venta;
