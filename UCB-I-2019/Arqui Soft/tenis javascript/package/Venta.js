
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

    total(cantidadArticulos, cantidadServicios) {
        return this.articulo.calcularTarifa(cantidadArticulos) + this.servicio.calcularTarifa(cantidadServicios);
    }
}
module.exports = Venta;
