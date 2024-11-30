export default class Vector {
    constructor(diretion = "up", speed = 0) {
        this.diretion = diretion;
        this.speed = speed;
        this.dx = 0;
        this.dy = 0;
        this.setDirection(this.diretion, this.speed);
        // параметры направления и скорость перемещения 
    }

    setDirection(diretion, speed) {
        this.diretion = diretion;
        this.speed = speed;
        this.dy = 0;
        // управление направлением движения    
        switch (this.diretion) {
            case "up":
                this.dy = -speed;
                break;
        // двигаем игрока вверх
            case "down":
                this.dy = speed;
                break;
        // двигаем игрока вниз
            default:
                this.dy = this.dy;
                break;
        // игрок на месте
        }
    }

    kinematic(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    // метод для движения шара
    }

    move(obj) {
        obj.x += this.dx / 1000;
        obj.y += this.dy / 1000;
    }
}