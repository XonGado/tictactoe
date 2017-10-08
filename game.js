"use strict";

const PLAYER_X  =   "x";
const PLAYER_O  =   "o";
const BLANK     =   "_";

// 3 x 3 Tic Tac Toe
const BOARD_LENGTH = 9;

class Game {
    constructor(){
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

    isGameOver(){
        if(this.isWin(PLAYER_O) || this.isWin(PLAYER_X) || this.turnNumber == BOARD_LENGTH+1){
            return true;
        }
        return false;
    }

    isWin(player, state){
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
            checkEqual([stateTested[6], stateTested[7], stateTested[8], player]) 
            
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