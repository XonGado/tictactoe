"use strict";

const PLAYER_X  =   "x";
const PLAYER_O  =   "o";
const BLANK     =   "_";

// 3 x 3 Tic Tac Toe
const BOARD_LENGTH = 9;

class Game {
    constructor(){
        this.state = [PLAYER_X,     PLAYER_O,   BLANK,
            BLANK,        PLAYER_X,   BLANK,
            BLANK,        BLANK,      PLAYER_O    
        ];
        this.state = new Array(BOARD_LENGTH).fill(BLANK);
        this.turnNumber = 1;
        this.currentPlayer = PLAYER_X;
    }

    move(player, position){
        var tiles = document.getElementsByClassName("tile");
        tiles[position].className += " active";
        
        this.state[position] = player;
        this.changeTurn();
    }

    changeTurn(){
        if(this.currentPlayer == PLAYER_X){
            this.currentPlayer = PLAYER_O;
        }
        else{
            this.currentPlayer = PLAYER_X;
        }
        this.turnNumber++;
    }

    isValidMove(position){
        if(this.state[position] == BLANK){
            return true;
        }
        return false;
    }

    static isGameOver(gameState){
        if(Game.isWin(PLAYER_O, gameState) || Game.isWin(PLAYER_X, gameState) || Game.getAvailableMoves(gameState).length == 0){
            return true;
        }
        return false;
    }

    static getAvailableMoves(gameState){
        let moves = [];
        for (var i = 0; i < 9; i++) {
            if(gameState[i] == BLANK){
                moves.push(i);
            }
        }
        return moves;
    }
    
    static activeTurn(gameState){
        let availMoves = Game.getAvailableMoves(gameState);
        if(availMoves.length % 2 == 0){
            return PLAYER_X;
        }
        else{
            return PLAYER_O;
        }
    }

    static isWin(player, state){
        let stateTested = [];
        if(state){
            stateTested = state;
        }
        else{
            stateTested = this.state;
        
            console.log(stateTested);
        }

        // 8 Conditions, no time to create an efficient algorithm        

        if(
            checkEqual([stateTested[0], stateTested[1], stateTested[2], player]) || 
            checkEqual([stateTested[3], stateTested[4], stateTested[5], player]) || 
            checkEqual([stateTested[6], stateTested[7], stateTested[8], player]) ||

            
            checkEqual([stateTested[0], stateTested[3], stateTested[6], player]) || 
            checkEqual([stateTested[1], stateTested[4], stateTested[7], player]) || 
            checkEqual([stateTested[2], stateTested[5], stateTested[8], player]) ||

            
            checkEqual([stateTested[0], stateTested[4], stateTested[8], player]) || 
            checkEqual([stateTested[2], stateTested[4], stateTested[6], player])
        ){
            return true;
        }
        return false;
    }

    
}

function checkEqual(array){
    let flag = true;
    let old = array[0];
    for (var i = 1; i < array.length; i++) {
        if(old != array[i]){
            flag = false;
        }
    }
    return flag;
}
