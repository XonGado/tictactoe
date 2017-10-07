class View{
    constructor(){

    }

    display(game){

		for (var i = 0; i < game.state.length; i++) {
			this.showTileState(game.state[i], i);
		}

    }

    showTileState(tileState, index){
    	var tiles = document.getElementsByClassName("tile");

    	if (tileState == "o") {
	    	tiles[index].children[0].style.opacity = 1;
    	} 
    	else if (tileState == "x") {
	    	tiles[index].children[1].style.opacity = 1;
    	} 
    	else {
	    	tiles[index].children[0].style.opacity = 0;
	    	tiles[index].children[1].style.opacity = 0;
    	}
    }
}