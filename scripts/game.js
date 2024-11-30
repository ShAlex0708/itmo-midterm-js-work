import Canvas from "./canvas.js";
import Control from "./control.js";
import CreateUI from "./createUI.js";
import Player from "./player.js";
// создаём экземпляры слоёв
class Game {
    constructor() {
        this.screen = new Map([
            ["background", new Canvas()],
            ["gamelayer", new Canvas()],
            ["ui", new Canvas()]
        ]);
        // создаём коллекцию слоёв, которые будут храниться в screen

        this.control1 = new Control([[38, "up"], [40, "down"]]);
        this.control2 = new Control([[87, "up"], [83, "down"]]);
        // создаём экземпляры контролла игроков, передаём ключи управления

        this.player1 = new Player(this, 10, 200, this.control1, "rgb(221, 141, 200)");
        this.player2 = new Player(this, this.screen.get("gamelayer").element.width - 20, 200, this.control2, "rgb(141, 205, 221)");
        this.UI = new CreateUI(this);
        // создаём экземпляр ЮИ

        this.init();
    }

    init() {
        this.screen.get("background").fill("rgb(187, 199, 153)");
        this.screen.get("background").drawRect((this.screen.get("background").element.width / 2) - 3, 0, 4, this.screen.get("background").element.height, "rgb(131, 131, 145)");
        this.screen.get("background").drawCircle((this.screen.get("background").element.width / 2), (this.screen.get("background").element.height / 2), 100, 4, "rgb(131, 131, 145)", false);

        requestAnimationFrame(time => this.loop(time));

    }

    update(time) {

        this.player1.update(time);
        this.player2.update(time);

    }

    loop(time) {

        this.screen.get("gamelayer").clear();

        this.update(time);
        requestAnimationFrame(time => this.loop(time));
        // зацикливаем метод loop при помощи requestAnimationFrame
        this.player1.draw();
        this.player2.draw();
    }
}

window.onload = () => {
    const game = new Game();
}