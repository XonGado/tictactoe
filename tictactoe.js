let game = new Game();
let view = new View();







view.display(game);
game.move("x", "topLeft");
view.display(game);
game.move("o", "centerMiddle");
view.display(game);