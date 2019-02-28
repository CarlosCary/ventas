class Producto {
    // disponible = new Boolean();

}

class Articulo extends Producto {

}

class Venta {
    constructor() {
    }

    total() {
        return 0;
    }
}
if (typeof window === "undefined") {
    module.exports = Venta;
}