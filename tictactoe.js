class TicTacToe{
    constructor(game, view, gameType, player_AI){
        this.game = game;
        this.view = view;
        this.gameType = gameType;
        this.setUpListeners();
        this.player_AI = player_AI;
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
            if(that.playTurn(index)){
                if(!Game.isGameOver(that.game.state)){

                	showLoading();

                    const move = that.player_AI.thinkMove();
                    
                    hideLoading();
                    console.log("this is move " +move);
                    that.playTurn(move);               
                }
            }
		});

		tile.addEventListener("mouseover", function(){return hover(index, that)});
		tile.addEventListener("mouseleave", function(){return leave(index, that)});
	}

    playTurn(position){
        
    	// console.log(position);
        if(this.game.isValidMove(position)){
        	var status = document.getElementById("status");
            // Human
            if(this.game.currentPlayer == PLAYER_X){
                console.log("Playing move Human:" + position);
                this.game.move(PLAYER_X, position);
                this.view.display(this.game);
                status.innerHTML = "It is your turn.";
            }
            // AI 
            else{
                console.log("Playing move:" + position);
                this.game.move(PLAYER_O, position);
                this.view.display(this.game);
                status.innerHTML = "It is my turn.";
            }
            
            this.view.display(this.game);
              
            if(Game.isGameOver(this.game.state)){
                console.log("Game Over!");

                if (Game.isWin(PLAYER_X, this.game.state)) {
	                status.innerHTML = "Game Over! Player X wins!";
                }
                else if (Game.isWin(PLAYER_O, this.game.state)) {
	                status.innerHTML = "Game Over! Player O wins!";
                }
                else {
	                status.innerHTML = "Game Over! It's a draw.";
                }
            }
            
            return true;
        }
        else{
            console.log("Invalid MOVE!")
            return false;
        }

    }
}

window.onload = function () {

	console.log("check on load");
	const game = new Game();
	const view = new View();
    const player_AI = new Dummy(PLAYER_O,game);

	const tictactoe = new TicTacToe(game, view, "PVAI", player_AI);

    
};

function hover(index, tictactoe){
	var tiles = document.getElementsByClassName("tile");
	if (!(hasClass(tiles[index], "active"))) {
		if (tictactoe.game.currentPlayer == PLAYER_O) {
			tiles[index].children[0].style.opacity = 0.5;
		}
		else {
			tiles[index].children[1].style.opacity = 0.5;
		}
		// console.log("hovered on tile.")
	}
}

function leave(index, tictactoe){
	var tiles = document.getElementsByClassName("tile");
	if (!(hasClass(tiles[index], "active"))) {
		if (tictactoe.game.currentPlayer == PLAYER_O) {
			tiles[index].children[0].style.opacity = 0;
		}
		else {
			tiles[index].children[1].style.opacity = 0;
		}
		// console.log("leaved tile.");
	}
};

function hasClass( target, className ) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function showLoading(){
	var spinner = document.getElementById("spinner");
	spinner.style.opacity = 1.0;
}

function hideLoading(){
	var spinner = document.getElementById("spinner");
	spinner.style.opacity = 0;
}