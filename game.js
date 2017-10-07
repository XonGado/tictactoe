"use strict";

const PLAYER_X  = "x";
const PLAYER_O  = "o";
const BLANK     = "_";


class Game {
    constructor(){
        this.state = {
            "topLeft":      BLANK,
            "topMiddle":    BLANK,
            "topRight":     BLANK,
            "centerLeft":   BLANK,
            "centerMiddle": BLANK,
            "centerRight":  BLANK,
            "bottomLeft":   BLANK,
            "bottomMiddle": BLANK,
            "bottomRight": BLANK
        }
        this.turnNumber = 1;
        this.currentPlayer = PLAYER_X;
    }

    move(player, position){
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