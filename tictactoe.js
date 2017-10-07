

// view.display(game);
// game.move("x", "topLeft");
// view.display(game);
// game.move("o", "centerMiddle");
// view.display(game);


class TicTacToe{
    constructor(game, view){
        this.game = game;
        this.view = view;
    }

    playTurn(position){
        if(this.game.isValidMove(position)){
            // Human
            if(this.game.currentPlayer == PLAYER_X){
                this.game.move(PLAYER_X, position);
                this.view.display(this.game);
            }
            // AI 
            else{
                this.game.move(PLAYER_O, position);
                this.view.display(this.game);
            }
        }    
    }
}

let game = new Game();
let view = new View();

const tictactoe = new TicTacToe(game,view);
setTimeout(function(){
    tictactoe.playTurn("topRight");
    setTimeout(function(){
        tictactoe.playTurn("topLeft");
        setTimeout(function(){
            tictactoe.playTurn("centerRight");
            setTimeout(function(){
                tictactoe.playTurn("topRight");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

