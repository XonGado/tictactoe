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
}