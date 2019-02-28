var assert = require('assert');
var expect = require('chai').expect;

import Venta from '../Venta.js';

describe('TennisGame', function(){
    let venta;

    beforeEach(function() {
        venta = new Venta();
    });

    it ('Venta sin productos deberia ser 0', function(){
        expect(venta.total()).equal(0);
    });
    it ('Los productos en una venta deberian estar disponibles', function(){
        expect(venta.productosEstanDispobible()).equal(true);
    });
    it ('Los articulos en una venta deberian estar disponibles', function(){
        expect(venta.productosEstanDispobible()).equal(true);
    });
});
