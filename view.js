class View{
    constructor(){

    }

    display(game){

		for (var i = 0; i < game.state.length; i++) {
			this.showTileState(game.state[i], i, game);
		}

    }

    showTileState(tileState, index, game){
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

    	var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    	var combo = 0;

    	for (var i = win.length - 1; i >= 0; i--) {
    		// console.log("combination: " + i);
    		for (var j = win[i].length - 1; j >= 0; j--) {
    			if (hasClass(tiles[win[i][j]], "active")) {
	    			combo++;
    				if ((combo == 3) && (game.state[win[i][0]] == game.state[win[i][1]]) && (game.state[win[i][1]] == game.state[win[i][2]])) {
	    				for (var k = win[i].length - 1; k >= 0; k--) {
							tiles[win[i][k]].className += " win";
						}
					}
	    		}
    		}
    		combo = 0;
    	}

    	// if (hasClass(tiles[0], "active") && hasClass(tiles[1], "active") && hasClass(tiles[2], "active")) {
    	// 	tiles[0].className += "win";
    	// 	tiles[1].className += "win";
    	// 	tiles[2].className += "win";
    	// }
    }
}