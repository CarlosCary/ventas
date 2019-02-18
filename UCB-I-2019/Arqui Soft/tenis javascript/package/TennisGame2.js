var TennisGame2 = function(player1Name, player2Name) {
    this.Player1Points = 0;
    this.Player2Points = 0;

    this.Player1Result = "";
    this.Player2Result = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.player1AndPlayer2HaveLess3PointsAndAreDraw = function() {
    return this.Player1Points === this.Player2Points && this.Player1Points < 3;
}

TennisGame2.prototype.player1AndPlayer2HaveGreater3PointsAndAreDraw = function() {
    return this.Player1Points === this.Player2Points && this.Player1Points > 2;
}

TennisGame2.prototype.player1HavePointsAndPlayer2HaveCeroPoints = function() {
    return this.Player1Points > 0 && this.Player2Points === 0
}

TennisGame2.prototype.getScore = function() {
    var result = "";
    
    if (this.player1AndPlayer2HaveLess3PointsAndAreDraw()) {
        switch(this.Player1Points) {
            case 0:
                result = "Love";
                break;
            case 1:
                result = "Fifteen";
                break;
            case 2:
                result = "Thirty";
                break; 
        }
        result += "-All";
        return result;
    }

    if (this.player1AndPlayer2HaveGreater3PointsAndAreDraw())
        return "Deuce";

    if (this.player1HavePointsAndPlayer2HaveCeroPoints()) {
        if (this.Player1Points === 1)
            this.Player1Result = "Fifteen";
        if (this.Player1Points === 2)
            this.Player1Result = "Thirty";
        if (this.Player1Points === 3)
            this.Player1Result = "Forty";

        this.Player2Result = "Love";
        result = this.Player1Result + "-" + this.Player2Result;
    }
    if (this.Player2Points > 0 && this.Player1Points === 0) {
        if (this.Player2Points === 1)
            this.Player2Result = "Fifteen";
        if (this.Player2Points === 2)
            this.Player2Result = "Thirty";
        if (this.Player2Points === 3)
            this.Player2Result = "Forty";

        this.Player1Result = "Love";
        result = this.Player1Result + "-" + this.Player2Result;
    }

    if (this.Player1Points > this.Player2Points && this.Player1Points < 4) {
        if (this.Player1Points === 2)
            this.Player1Result = "Thirty";
        if (this.Player1Points === 3)
            this.Player1Result = "Forty";
        if (this.Player2Points === 1)
            this.Player2Result = "Fifteen";
        if (this.Player2Points === 2)
            this.Player2Result = "Thirty";
        result = this.Player1Result + "-" + this.Player2Result;
    }
    if (this.Player2Points > this.Player1Points && this.Player2Points < 4) {
        if (this.Player2Points === 2)
            this.Player2Result = "Thirty";
        if (this.Player2Points === 3)
            this.Player2Result = "Forty";
        if (this.Player1Points === 1)
            this.Player1Result = "Fifteen";
        if (this.Player1Points === 2)
            this.Player1Result = "Thirty";
        result = this.Player1Result + "-" + this.Player2Result;
    }

    if (this.Player1Points > this.Player2Points && this.Player2Points >= 3) {
        result = "Advantage player1";
    }

    if (this.Player2Points > this.Player1Points && this.Player1Points >= 3) {
        result = "Advantage player2";
    }

    if (this.Player1Points >= 4 && this.Player2Points >= 0 && (this.Player1Points - this.Player2Points) >= 2) {
        result = "Win for player1";
    }
    if (this.Player2Points >= 4 && this.Player1Points >= 0 && (this.Player2Points - this.Player1Points) >= 2) {
        result = "Win for player2";
    }

    return result;
};

TennisGame2.prototype.P1Score = function() {
    this.Player1Points++;
};

TennisGame2.prototype.P2Score = function() {
    this.Player2Points++;
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}