class Dummy{
    constructor(player_option,game){
        this.game = game;
        this.player_option = player_option;
    }

    thinkMove(){
        // for (var i = 300000000; i >= 0; i--) {
        //     var x = 1 + 1;
        // }
        let position = Math.floor((Math.random() * 9));
        while(!this.game.isValidMove(position)){
            position = Math.floor((Math.random() * 9));
        }
        return position;
    }
}