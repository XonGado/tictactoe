class Dummy{
    constructor(game){
        this.game = game;
    }

    thinkMove(){
        let position = Math.floor((Math.random() * 9));
        while(!this.game.isValidMove(position)){
            position = Math.floor((Math.random() * 9));
        }
        return position;
    }
}