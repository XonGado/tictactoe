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
                if(!that.game.isGameOver()){
                    that.playTurn(that.player_AI.thinkMove());                    
                }
            }
		});
    }
    
    
    

    playTurn(position){
        if(this.game.isValidMove(position)){
            // Human
            if(this.game.currentPlayer == PLAYER_X){
                this.game.move(PLAYER_X, position);
            }
            // AI 
            else{
                this.game.move(PLAYER_O, position);
            }
            
            this.view.display(this.game);
            
            if(this.game.isGameOver()){
                console.log("Game Over!");
            }
            
            return true;
        }
        else{
            return false;
        }

    }
}

window.onload = function () {
	console.log("check on load");
	const game = new Game();
	const view = new View();
    const player_AI = new Dummy(game);

	const tictactoe = new TicTacToe(game, view, "PVAI", player_AI);

    
};