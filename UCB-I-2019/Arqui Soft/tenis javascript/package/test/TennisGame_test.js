var assert = require('assert');
var expect = require('chai').expect;

import TennisGame2 from '../tennisgame2.js';

describe('TennisGame', function(){
    
    let game;
    beforeEach(function() {
        game = new TennisGame2("jugador1", "jugador2");
    });

    it ('El puntaje deberia devolver Love - All si ningun jugador realizo puntos', function(){
        expect(game.getScore()).equal("Love-All");
    });

});
