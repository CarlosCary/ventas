var TennisGame2 = function(player1Name, player2Name) {
    this.Player1Points = 0;
    this.Player2Points = 0;

    this.Player1resultGame = "";
    this.Player2resultGame = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    let resultGame;

    this.Player1resultGame = assignGenericresultGame(this.Player1Points);
    this.Player2resultGame = assignGenericresultGame(this.Player2Points);

    resultGame = this.Player1resultGame + "-" + this.Player2resultGame;

    if(this.player1AndPlayer2HaveGreater3PointsAndAreDraw()) {
        return "Deuce";
    }

    if(this.player1AndPlayer2HaveLess3PointsAndAreDraw()) {
        resultGame = this.Player1resultGame + "-" + "All";
        return resultGame;
    }

    if(this.playersHaveAdvantage()) {
        resultGame = this.assignAdvantageOrWin();
    }
    
    if(this.playersWin()) {
        resultGame = this.assignWin();
    }
    
    return resultGame;
};

TennisGame2.prototype.player1AndPlayer2HaveLess3PointsAndAreDraw = function() {
    return this.Player1Points === this.Player2Points && this.Player1Points < 3;
}

TennisGame2.prototype.player1AndPlayer2HaveGreater3PointsAndAreDraw = function() {
    return this.Player1resultGame === this.Player2resultGame && this.Player1Points > 2;
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

TennisGame2.prototype.playersHaveAdvantage = function() {
    return this.Player1Points >= 3 && this.Player2Points >= 3;
}

TennisGame2.prototype.assignAdvantageOrWin = function() {
    let resultGame = "";
    if (this.player1HaveAdvantage()) {
        resultGame = "Advantage player1";
    }
    
    if (this.player2HaveAdvantage()) {
        resultGame = "Advantage player2";
    }
    
    return resultGame;
}

TennisGame2.prototype.playersWin = function() {
    return (this.Player1Points > 3 || this.Player2Points > 3) && (this.Player1Points - this.Player2Points >= 2 || this.Player2Points - this.Player1Points >= 2);
}
TennisGame2.prototype.assignWin = function() {
    let resultGame = "";
    if (this.player1Win()) {
        resultGame = "Win for player1";
    }
    
    if (this.player2Win()) {
        resultGame = "Win for player2";
    }
    
    return resultGame;
}


function assignGenericresultGame(playerPoints) {
    let resultGame = "";
    switch(playerPoints) {
        case 0:
            resultGame = "Love";
            break;
        case 1:
            resultGame = "Fifteen";
            break;
        case 2:
            resultGame = "Thirty";
            break;
        case 3:
            resultGame = "Forty";
            break;
    }
    return resultGame;
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