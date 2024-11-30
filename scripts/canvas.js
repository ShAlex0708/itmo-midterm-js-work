export default class Canvas {
    constructor(width = 640, height = 480) {
        // принимаем высоту и ширину полотна
        this.element = document.createElement("canvas");
        // создаём элемент полотно
        this.cx = this.element.getContext("2d");
        // передаём контекст два дэ
        this.element.width = width;
        this.element.height = height;
        // задаём размеры
        document.querySelector("#game").append(this.element);
        // аппэендим полотно в ИД гейм
    }

    fill(color) {
        // создаём метод раз, им принимаем цвет и выполняем заливку полотна
        this.cx.fillStyle = color;
        this.cx.fillRect(0, 0, this.element.width, this.element.height);
    }

    drawRect(x, y, width, height, color) {
        // создвём метод два, принимаем координаты, высоту, ширину и цвет, рисуем прямоугольник
        this.cx.fillStyle = color;
        this.cx.fillRect(x, y, width, height);
    }

    drawRectRound(x, y, width, height, radius, fill, stroke) {
        // создаём метод три, принимем координаты, высоту, ширину, радиус, заливку, строим контур
        if (typeof stroke == "undefined") {
            stroke = true;
        }
        if (typeof radius === "undefined") {
            radius = 5;
        }
        if (typeof radius === "number") {
            radius = { tl: radius, tr: radius, br: radius, bl: radius };
        } else {
            const defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
            for (let side in defaultRadius) {
                radius[side] = radius[side] || defaultRadius[side];
            }
        }
        this.cx.beginPath();
        this.cx.moveTo(x + radius.tl, y);
        this.cx.lineTo(x + width, y, x + width, y + radius.tr);
        this.cx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        this.cx.lineTo(x + width, y + height - radius.br);
        this.cx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        this.cx.lineTo(x + radius.bl, y + height);
        this.cx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        this.cx.lineTo(x, y, x + radius.tl, y);
        this.cx.closePath();

        if (fill) {
            this.cx.fillStyle = fill;
            this.cx.fill();
        }
        if (stroke) {
            this.cx.strokeStyle = fill;
            this.cx.stroke();
        }
        // как рисовать прямоугальник со скруглёнными углами подсмотрено тут: https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-using-html-canvas
    }

    drawCircle(x, y, radius, lineWidth, color, fill = true) {
        // метод четыря, рисует окружность на поле, принимаем координаты, радиус, толщину линии, цвет заливки, заливку
        this.cx.beginPath();
        this.cx.lineWidth = lineWidth;
        this.cx.arc(x, y, radius, 0, Math.PI * 2, true);
        this.cx.strokeStyle = color;

        if (fill) {
            this.cx.fillStyle = color;
            this.cx.fill();

            return;
        }

        this.cx.stroke();
        this.cx.closePath();
    }

    print(x, y, text, color) {
        // пятый метод принимает координаты, текст и цвет
        this.cx.fillStyle = color;
        this.cx.font = "bold 20px sans-serif";
        this.cx.fillText(text, x, y);
    }

    clear() {
        // метод шесть, для очистки полотна
        this.cx.clearRect(0, 0, this.element.width, this.element.height);
    }
}