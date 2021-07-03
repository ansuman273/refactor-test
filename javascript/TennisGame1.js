/**
 * Constructor used to initialize or create a new game
 * @constructor
 * @date 2021-07-03
 * @param {any} player1Name
 * @param {any} player2Name
 */
var TennisGame1 = function(player1Name, player2Name) {
    /**
     * Score of player1.
     * @name TennisGame1#player1Score
     * @type {any}
     */
    this.player1Score = 0;
    /**
     * Score of player2.
     * @name TennisGame1#player2Score
     * @type {any}
     */
    this.player2Score = 0;
    /**
     * Name of player1.
     * @name TennisGame1#player1Name
     * @type {any}
     */
    this.player1Name = player1Name;
    /**
     * Name of player2.
     * @name TennisGame1#player2Name
     * @type {any}
     */
    this.player2Name = player2Name;
};

/**
 *  Tennis Point calculation
 * @date 2021-07-03
 * @param {any} playerName
 */
TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.player1Score += 1;
    else
        this.player2Score += 1;
};

/**
 * Get current game scores
 * @date 2021-07-03
 * @returns {any} score
 */
TennisGame1.prototype.getScore = function() {
    /**
     * Score Details.
     * @name getScore#score
     * @type {any}
     */
    var score = "";
    /**
     * Temporary score variable.
     * @name getScore#tempScore
     * @type {any}
     */
    var tempScore = 0;
    if (this.player1Score === this.player2Score) {
        switch (this.player1Score) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
        var minusResult = this.player1Score - this.player2Score;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.player1Score;
            else {
                score += "-";
                tempScore = this.player2Score;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}