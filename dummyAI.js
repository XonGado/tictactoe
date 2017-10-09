class Dummy{
    constructor(player_option,game){
        this.game = game;
        this.player_option = player_option;
    }

    thinkMove(){
        let position = Math.floor((Math.random() * 9));
        while(!this.game.isValidMove(position)){
            position = Math.floor((Math.random() * 9));
        }
        return position;
    }
}