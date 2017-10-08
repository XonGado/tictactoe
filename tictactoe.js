

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
		// tile.addEventListener("mouseover", hover(index, that));
		// tile.addEventListener("mouseleave", leave(index, that));
	}

    playTurn(position){
    	// console.log(position);
        if(this.game.isValidMove(position)){
        	var status = document.getElementById("status");
            // Human
            if(this.game.currentPlayer == PLAYER_X){
                this.game.move(PLAYER_X, position);
                this.view.display(this.game);
                status.innerHTML = "It is your turn.";
            }
            // AI 
            else{
                this.game.move(PLAYER_O, position);
                this.view.display(this.game);
                status.innerHTML = "It is my turn.";
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

// function hover(index, tictactoe){
// 	var tiles = document.getElementsByClassName("tile");
// 	if (tictactoe.game.currentPlayer == PLAYER_O) {
// 		tiles[index].children[0].style.opacity = 0.5;
// 	}
// 	else {
// 		tiles[index].children[1].style.opacity = 0.5;
// 	}
// 	console.log("hovered on tile.")
// }

// function leave(index, tictactoe){
// 	var tiles = document.getElementsByClassName("tile");
// 	if (tictactoe.game.currentPlayer == PLAYER_O) {
// 		tiles[index].children[0].style.opacity = 0;
// 	}
// 	else {
// 		tiles[index].children[1].style.opacity = 0;
// 	}
// 	console.log("leaved tile.");
// };