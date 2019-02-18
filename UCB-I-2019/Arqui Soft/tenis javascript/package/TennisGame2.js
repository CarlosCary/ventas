var TennisGame2 = function(player1Name, player2Name) {
    this.Player1Points = 0;
    this.Player2Points = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    var score = "";

    if (this.Player1Points === this.Player2Points && this.Player1Points < 3) {
        if (this.Player1Points === 0)
            score = "Love";
        if (this.Player1Points === 1)
            score = "Fifteen";
        if (this.Player1Points === 2)
            score = "Thirty";
        score += "-All";
    }
    if (this.Player1Points === this.Player2Points && this.Player1Points > 2)
        score = "Deuce";

    if (this.Player1Points > 0 && this.Player2Points === 0) {
        if (this.Player1Points === 1)
            this.P1res = "Fifteen";
        if (this.Player1Points === 2)
            this.P1res = "Thirty";
        if (this.Player1Points === 3)
            this.P1res = "Forty";

        this.P2res = "Love";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.Player2Points > 0 && this.Player1Points === 0) {
        if (this.Player2Points === 1)
            this.P2res = "Fifteen";
        if (this.Player2Points === 2)
            this.P2res = "Thirty";
        if (this.Player2Points === 3)
            this.P2res = "Forty";

        this.P1res = "Love";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.Player1Points > this.Player2Points && this.Player1Points < 4) {
        if (this.Player1Points === 2)
            this.P1res = "Thirty";
        if (this.Player1Points === 3)
            this.P1res = "Forty";
        if (this.Player2Points === 1)
            this.P2res = "Fifteen";
        if (this.Player2Points === 2)
            this.P2res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.Player2Points > this.Player1Points && this.Player2Points < 4) {
        if (this.Player2Points === 2)
            this.P2res = "Thirty";
        if (this.Player2Points === 3)
            this.P2res = "Forty";
        if (this.Player1Points === 1)
            this.P1res = "Fifteen";
        if (this.Player1Points === 2)
            this.P1res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.Player1Points > this.Player2Points && this.Player2Points >= 3) {
        score = "Advantage player1";
    }

    if (this.Player2Points > this.Player1Points && this.Player1Points >= 3) {
        score = "Advantage player2";
    }

    if (this.Player1Points >= 4 && this.Player2Points >= 0 && (this.Player1Points - this.Player2Points) >= 2) {
        score = "Win for player1";
    }
    if (this.Player2Points >= 4 && this.Player1Points >= 0 && (this.Player2Points - this.Player1Points) >= 2) {
        score = "Win for player2";
    }

    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.Player1Points++;
};

TennisGame2.prototype.P2Score = function() {
    this.Player2Points++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}