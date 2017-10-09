class ComputerPlayer{
    constructor(player_side, game){
        this.player_side = player_side;
        this.game = game;

        if(player_side == PLAYER_O){
            this.opponent_side = PLAYER_X;
        }
        else{
            this.opponent_side = PLAYER_O;
        }

    }

    thinkMove(){
        const choice = ComputerPlayer.minimax(this.game.state, this.player_side).choice;
        console.log(choice);
        return choice;
    }

    static minimax(gameState, player_side){
        if(Game.isGameOver(gameState)){
            console.log("Returning a score: "+ ComputerPlayer.score(gameState));
            return ComputerPlayer.score(gameState);
        }
        let scores = [];
        let moves = [];




        let availMoves = Game.getAvailableMoves(gameState);
        
        var next_side = "o";
        if(player_side == "o"){
            next_side = "x";
        }
        console.log(availMoves);
        for (var i = 0; i < availMoves.length; i++) {
            
            let possible_game = gameState.slice(0);
            possible_game[availMoves[i]] = player_side;
            console.log(possible_game);

            
            let testScore = ComputerPlayer.minimax(possible_game, next_side);
            console.log("Pushing this one: " + testScore);
            scores.push(testScore);
            moves.push(availMoves[i]);
        }


        // Min max 
        let scoreIndex = 0;
        if(Game.activeTurn(gameState) == PLAYER_X){
            scoreIndex = indexOfMax(scores);
        }
        else{
            scoreIndex = indexOfMin(scores);
        }
        console.log(scores);
        console.log(scores[scoreIndex]);
        const scoreChoice = {
            "score": scores[scoreIndex],
            "choice": moves[scoreIndex]
        };
        console.log(scoreChoice);

        return scoreChoice;
    }

    static score(gameState){
        if(Game.isWin(PLAYER_X, gameState)){
            return 10;
        }
        else if(Game.isWin(PLAYER_X, gameState)){
            return -10;
        }
        else{
            return 0;
        }
    }
}




















function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }

    return minIndex;
}