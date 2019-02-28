var assert = require('assert');
var expect = require('chai').expect;

import Venta from '../Venta.js';

describe('TennisGame', function(){
    let venta;

    beforeEach(function() {
        venta = new Venta();
    });

    it ('Venta sin productos deberia ser 0', function(){
        expect(venta.total(0, 0)).equal(0);
    });
    it ('Los productos en una venta deberian estar disponibles', function(){
        expect(venta.productosEstanDispobible()).equal(true);
    });
    it ('Los articulos en una venta deberian estar disponibles', function(){
        expect(venta.productosEstanDispobible()).equal(true);
    });

    it ('El coste de un articulo en la venta deberia ser 10', function(){
        expect(venta.totalArticulos(1)).equal(10);
    });

    it ('El coste de un servicio en la venta deberia ser 20', function(){
        expect(venta.totalServicios(1)).equal(20);
    });

    it ('El total de 1 articulo y 1 servicio deberia ser 30', function(){
        expect(venta.total(1, 1)).equal(30);
    });

    it ('El total de 2 articulo y 1 servicio deberia ser 50', function(){
        expect(venta.total(2, 1)).equal(40);
    });

    it ('El total de 2 articulo y 2 servicio deberia ser 60', function(){
        expect(venta.total(2, 2)).equal(60);
    });
});
