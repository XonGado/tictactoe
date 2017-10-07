class View{
    constructor(){

    }

    display(game){
        console.log(game.state.topLeft);

		Object.keys(game.state).forEach(function(key,index) {
			View.showTileState(game.state[key], index);
			console.log(game.state[key]);
			console.log(index);
		});
    }

    static showTileState(tileState, index){
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