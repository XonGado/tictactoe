"use strict";




class Game {
    constructor(){
        this.state = {
            "topLeft":      "_",
            "topMiddle":    "_",
            "topRight":     "_",
            "centerLeft":   "_",
            "centerMiddle": "_",
            "centerRight":  "_",
            "bottomLeft":   "_",
            "bottomMiddle": "_",
            "bottomRight": "_"
        }
        this.turnNumber = 1;
        this.currentPlayer = "x";
    }

    move(player, placement){
        this.state[placement] = player;
        changeTurn();
    }

    changeTurn(){
        if(this.currentPlayer == "x"){
            this.currentPlayer = "o";
        }
        else{
            this.currentPlayer = "x";
        }
        this.turnNumber++;
    }
}