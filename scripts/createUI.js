export default class CreateUI {
    constructor(game) {
        this.game = game;
        this.posLeftY = this.game.screen.get("ui").element.width / 4;
        this.posRightY = this.game.screen.get("ui").element.width - this.posLeftY;

        this.init();
    }

    init() {
        this.updateUI();
    }

    updateUI() {
        this.game.screen.get("ui").clear();

        this.game.screen.get("ui").drawRectRound(this.posLeftY - 30, 10, 50, 35, 15, "rgb(128, 141, 104)");
        // this.game.screen.get("ui").print(this.posLeftY - 6, 38, this.game.player1.score, "gold");
        
        this.game.screen.get("ui").drawRectRound(this.posRightY - 30, 10, 50, 35, 15, "rgb(128, 141, 104)");
        // this.game.screen.get("ui").print(this.posRightY - 6, 38, this.game.player2.score, "gold");
    }
}