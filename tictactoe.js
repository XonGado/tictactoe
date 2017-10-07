

// view.display(game);
// game.move("x", "topLeft");
// view.display(game);
// game.move("o", "centerMiddle");
// view.display(game);




class TicTacToe{
    constructor(game, view, gameType){
        this.game = game;
        this.view = view;
        this.gameType = gameType;
        this.setUpListeners();
        console.log("check");
    }

    setUpListeners(){
    	if (this.gameType = "PVAI") {
			var tiles = document.getElementsByClassName("tile");

			for (var i = tiles.length - 1; i >= 0; i--) {
	   			this.addListenerToTile(tiles[i], i);
	   		}
    	}
    	else {}
    }

	addListenerToTile(tile, index){
        const that = this;
        console.log(that);
		tile.addEventListener("click", function(){
			that.playTurn(index);
		});
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

window.onload = function () {
	console.log("check on load");
	const game = new Game();
	const view = new View();

	const tictactoe = new TicTacToe(game,view,"PVAI");
	// setTimeout(function(){
	//     tictactoe.playTurn("topRight");
	//     setTimeout(function(){
	//         tictactoe.playTurn("topLeft");
	//         setTimeout(function(){
	//             tictactoe.playTurn("centerRight");
	//             setTimeout(function(){
	//                 tictactoe.playTurn("topRight");
	//             }, 1000);
	//         }, 1000);
	//     }, 1000);
    // }, 1000);
    
};