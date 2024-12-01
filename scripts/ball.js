import Body from "./body.js";

export default class Ball extends Body {
    constructor(game, x, y, radius, color) {
        super(x, y);

        this.game = game;
        this.radius = radius;
        this.width = this.radius;
        this.height = this.radius;
        this.color = color;
        this.speed = 1000;
        this.dx = this.speed;
        this.dy = this.speed;
        this.collisionShape = {
            x: this.x,
            y: this.y,
            width: this.radius,
            height: this.radius
        }
    }

    draw() {
        this.game.screen.get("gamelayer").drawCircle(this.x, this.y, this.radius, 0, this.color);
    }

    spawn(time) {
        this.x = this.game.screen.get("gamelayer").element.width / 2;
        this.x = this.game.screen.get("gamelayer").element.height / 2;

        this.dx *= -1;
        this.dy *= time % 2 ? 1 : -1;
    }

    update(time) {

        if (this.y <= 0) {
            this.dy *= -1;
        }

        if (this.y + this.radius >= this.game.screen.get("gamelayer").element.height) {
            this.dy *= -1;
        }

        if (this.x + this.radius >= this.game.screen.get("gamelayer").element.width) {
            this.game.player1.scoreInc();
            this.game.UI.updateUI();
            this.spawn(time);
        }

        if (this.x - this.radius <= 0) {
            this.game.player2.scoreInc();
            this.game.UI.updateUI();
            this.spawn(time); 
        }

        if (this.game.collider.collides(this, this.game.player1)) {
            this.dx *= -1;
        }

        if (this.game.collider.collides(this, this.game.player2)) {
            this.dx *= -1;
        }

        this.bodyMove();

        super.update(time);
    }
}