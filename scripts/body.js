import Vector from "./vector";

export default class Body {
    constructor(x, y, speed = 5000, width = 14, height = 80) {
        // принимаем координаты, скорость и размеры
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.velocity = new Vector();
        // создаём экземпляр управления направлением
    }

    direction(direction) {
        this.velocity.setDirection(direction, this.speed);
        // указываем направление
    }

    bodyMove() {
        this.velocity.kinematic(this.dx, this.dy);
        // постоянное движение
    }

    update() {
        this.velocity.move(this);
        // перемещение персонажа
    }
}