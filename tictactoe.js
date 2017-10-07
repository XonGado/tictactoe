

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
    	if (gameType = "PVAI") {
			var tiles = document.getElementsByClassName("tile");

			for (var i = tile.length - 1; i >= 0; i--) {
	   			addListenerToTile(tile[i]);
	   		}   		
    	}
    	else {}
    }

	addListenerToTile(tile){
		tile.addEventListener("click", function(){
			console.log(this);
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
	let game = new Game();
	let view = new View();

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