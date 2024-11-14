# itmo-midterm-js-work
Итоговое задние по блоку JS

Игра пинг-понг

Правила:
Два игрока, поочерёдно отбивают мяч "ракетками" в пределах поля, если мяч вылетает за пределы поля по вине игрока, сопернику начисляется очко.
Игра продолжается в течении 5 сетов, 1 сет длится до получения одним из игроков 11 очков. Если счёт 10:10, игра продолжается до отрыва в два очка.

Геймплей
В геймплее необходимо реализовать графику, которая включает в себя:
- схематическое изображение ракеток которые способны перемещаться вверх/вниз в ограниченной области экрана (поле);
- мяч, который будет запускаться от игрока определённого случайным образом (жребием), или от игрока получившего очко. При попадании мяча в ракетку, траектория мяча должна изменяться, в зависимости от направления движения ракетки, так же должна быть предусмотренно изменение скорости по той же зависимости;
- поле должно быть ограничено сплошной линией по периметру, и иметь разделительную, пунктирную линию посередине;
- должно быть предусмотренно как парное сражение с соперником черовеком, сражение человека с компьютером и компьютера с компьютером. Предусмотреть несколько уровней сложности соперника компьютер;
- предусмотреть несколько уровней сложности, в которых меняется скорость движения мяча. При достижении равного счёта в сете игры, скорость мяча увеличивается незначительно, но с каждым десятком полученных очков.