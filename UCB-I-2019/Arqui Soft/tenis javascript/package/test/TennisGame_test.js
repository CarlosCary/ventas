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

    it ('El puntaje deberia devolver Fifteen - Love si el jugador 1 realizo un punto', function(){
        game.P1Score();
        expect(game.getScore()).equal("Fifteen-Love");
    });

    it ('El puntaje deberia devolver Thirty - Love si el jugador 1 realizo dos puntos', function(){
        game.P1Score();
        game.P1Score();
        expect(game.getScore()).equal("Thirty-Love");
    });

    it ('El puntaje deberia devolver Forty - Love si el jugador 1 realizo tres puntos', function(){
        game.P1Score();
        game.P1Score();
        game.P1Score();
        expect(game.getScore()).equal("Forty-Love");
    });

    it ('El puntaje deberia devolver Win for player1 si el jugador 1 realizo cuatro puntos', function(){
        game.P1Score();
        game.P1Score();
        game.P1Score();
        game.P1Score();
        expect(game.getScore()).equal("Win for player1");
    });

    it ('El puntaje deberia devolver Love - Fifteen si el jugador 2 realizo un punto', function(){
        game.P2Score();
        expect(game.getScore()).equal("Love-Fifteen");
    });

    it ('El puntaje deberia devolver Love - Thirty si el jugador 2 realizo dos puntos', function(){
        game.P2Score();
        game.P2Score();
        expect(game.getScore()).equal("Love-Thirty");
    });

    it ('El puntaje deberia devolver Love - Forty si el jugador 2 realizo tres puntos', function(){
        game.P2Score();
        game.P2Score();
        game.P2Score();
        expect(game.getScore()).equal("Love-Forty");
    });

    it ('El puntaje deberia devolver Win for player2 si el jugador 2 realizo cuatro puntos', function(){
        game.P2Score();
        game.P2Score();
        game.P2Score();
        game.P2Score();
        expect(game.getScore()).equal("Win for player2");
    });

    it ('El puntaje deberia devolver Fifteen-All si el jugador 1 y 2 realizaron un punto', function(){
        game.P1Score();
        game.P2Score();
        expect(game.getScore()).equal("Fifteen-All");
    });

    it ('El puntaje deberia devolver Thirty-Fifteen si el jugador 1 realizo dos puntos y el jugador 2 realizo un punto', function(){
        game.P1Score();
        game.P1Score();
        game.P2Score();
        expect(game.getScore()).equal("Thirty-Fifteen");
    });

    it ('El puntaje deberia devolver Forty-Fifteen si el jugador 1 realizo tres puntos y el jugador 2 realizo un punto', function(){
        game.P1Score();
        game.P1Score();
        game.P1Score();
        game.P2Score();
        expect(game.getScore()).equal("Forty-Fifteen");
    });

    it ('El puntaje deberia devolver Win for player1 si el jugador 1 realizo cuatro puntos y el jugador 2 realizo un punto', function(){
        game.P1Score();
        game.P1Score();
        game.P1Score();
        game.P1Score();
        game.P2Score();
        expect(game.getScore()).equal("Win for player1");
    });

    it ('El puntaje deberia devolver Thirty-All si el jugador 1 realizo dos puntos y el jugador 2 realizo dos puntos', function(){
        game.P1Score();
        game.P1Score();
        game.P2Score();
        game.P2Score();
        expect(game.getScore()).equal("Thirty-All");
    });

    it ('El puntaje deberia devolver Forty-Thirty si el jugador 1 realizo Tres puntos y el jugador 2 realizo dos puntos', function(){
        game.P1Score();
        game.P1Score();
        game.P1Score();
        game.P2Score();
        game.P2Score();
        expect(game.getScore()).equal("Forty-Thirty");
    });
});
