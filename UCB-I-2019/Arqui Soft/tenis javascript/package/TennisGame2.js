var TennisGame2 = function(player1Name, player2Name) {
    this.Player1Points = 0;
    this.Player2Points = 0;

    this.Player1Result = "";
    this.Player2Result = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    let result;

    this.Player1Result = assignGenericResult(this.Player1Points);
    this.Player2Result = assignGenericResult(this.Player2Points);

    if(this.player1AndPlayer2HaveLess3PointsAndAreDraw()) {
        result = this.Player1Result + "-" + "All";
        return result;
    }
    
    if(this.player1AndPlayer2HaveGreater3PointsAndAreDraw()) {
        return "Deuce";
    }

    result = this.Player1Result + "-" + this.Player2Result;

    if (this.player1HaveAdvantage()) {
        result = "Advantage player1";
    }

    if (this.player2HaveAdvantage()) {
        result = "Advantage player2";
    }

    if (this.player1Win()) {
        result = "Win for player1";
    }
    if (this.player2Win()) {
        result = "Win for player2";
    }

    return result;
};

TennisGame2.prototype.player1AndPlayer2HaveLess3PointsAndAreDraw = function() {
    return this.Player1Points === this.Player2Points && this.Player1Points < 3;
}

TennisGame2.prototype.player1AndPlayer2HaveGreater3PointsAndAreDraw = function() {
    return this.Player1Result === this.Player2Result && this.Player1Points > 2;
}

TennisGame2.prototype.player1HavePointsAndPlayer2HaveCeroPoints = function() {
    return this.Player1Points > 0 && this.Player2Points === 0;
}

TennisGame2.prototype.player1HaveAdvantage = function() {
    return this.Player1Points > this.Player2Points && this.Player2Points >= 3;
}

TennisGame2.prototype.player2HaveAdvantage = function() {
    return this.Player2Points > this.Player1Points && this.Player1Points >= 3;
}

TennisGame2.prototype.player1Win = function() {
    return this.Player1Points >= 4 && this.Player2Points >= 0 && (this.Player1Points - this.Player2Points) >= 2;
}

TennisGame2.prototype.player2Win = function() {
    return this.Player2Points >= 4 && this.Player1Points >= 0 && (this.Player2Points - this.Player1Points) >= 2;
}

function assignGenericResult(playerPoints) {
    let result = "";
    switch(playerPoints) {
        case 0:
            result = "Love";
            break;
        case 1:
            result = "Fifteen";
            break;
        case 2:
            result = "Thirty";
            break;
        case 3:
            result = "Forty";
            break;
    }
    return result;
}

TennisGame2.prototype.P1Score = function() {
    this.Player1Points++;
};

TennisGame2.prototype.P2Score = function() {
    this.Player2Points++;
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}