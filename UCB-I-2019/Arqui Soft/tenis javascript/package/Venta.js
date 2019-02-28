
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

class Venta {
    
    constructor() {
        this.articulo = new Articulo();
        this.cantidadArticulos = 0;
        this.cantidadServicios = 0;
    }

    productosEstanDispobible(){
        return this.articulo.estaDispobible();
    }
    
    agregarArticulo() {
        this.cantidadArticulos = this.cantidadArticulos + 1;
    }
    totalArticulo() {
        return this.articulo.calcularTarifa(this.cantidadArticulos);
    }
    total() {
        return 0;
    }
}
module.exports = Venta;
