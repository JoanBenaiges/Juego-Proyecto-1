class Enemies {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: 80,
            h: 80
        }

        this.enemiesPos = {
            left: this.gameSize.w / 1.125,
            top: this.gameSize.h / 9
        }

        this.enemiesVel = {
            left: 0,
            top: 5
        }

        this.init()
    }


    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundImage = 'url(./img/raccoon-roll.gif)';
        this.enemiesElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.enemiesElement)
    }


    enemiesBorderCollision() {

        if (
            this.enemiesPos.top > this.gameSize.h / 1.4 || this.enemiesPos.top < this.gameSize.h / 12
        ) {
            this.enemiesVel.top *= -1
        }


    }

    move() {
        this.enemiesBorderCollision()

        this.enemiesPos.top += this.enemiesVel.top;

        this.updatePosition();
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }
}

class Enemies2 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: 80,
            h: 80
        }

        this.enemiesPos = {

            left: this.gameSize.w / 1.45,
            top: this.gameSize.h / 2.5
        }

        this.enemiesVel = {
            left: 5,
            top: 0
        }

        this.init()
    }


    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundImage = 'url(./img/raccoon-roll.gif)';
        this.enemiesElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.enemiesElement)
    }


    enemiesBorderCollision() {

        if (
            this.enemiesPos.left > this.gameSize.w / 1.30 || this.enemiesPos.left < this.gameSize.w / 1.65
        ) {
            this.enemiesVel.left *= -1
        }

    }

    move() {
        this.enemiesBorderCollision()

        this.enemiesPos.left += this.enemiesVel.left;

        this.updatePosition();
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }
}


class Enemies3 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: 80,
            h: 80
        }

        this.enemiesPos = {
            left: this.gameSize.w / 1.9,
            top: this.gameSize.h / 15
        }

        this.enemiesVel = {
            left: 0,
            top: 7
        }

        this.init()
    }


    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundImage = 'url(./img/raccoon-roll.gif)';
        this.enemiesElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.enemiesElement)
    }


    enemiesBorderCollision() {

        if (
            this.enemiesPos.top > this.gameSize.h / 1.15 || this.enemiesPos.top < this.gameSize.h / 20
        ) {
            this.enemiesVel.top *= -1
        }


    }

    move() {
        this.enemiesBorderCollision()

        this.enemiesPos.top += this.enemiesVel.top;

        this.updatePosition();
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }
}


class Enemies4 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: 80,
            h: 80
        }

        this.enemiesPos = {
            left: this.gameSize.w / 2.85,
            top: this.gameSize.h / 15
        }

        this.enemiesVel = {
            left: 0,
            top: 10
        }

        this.init()
    }


    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundImage = 'url(./img/raccoon-roll.gif)';
        this.enemiesElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.enemiesElement)
    }


    enemiesBorderCollision() {

        if (
            this.enemiesPos.top > this.gameSize.h / 1.25 || this.enemiesPos.top < this.gameSize.h / 15
        ) {
            this.enemiesVel.top *= -1
        }


    }

    move() {
        this.enemiesBorderCollision()

        this.enemiesPos.top += this.enemiesVel.top;

        this.updatePosition();
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }
}



class Enemies5 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: 50,
            h: 50
        }

        this.enemiesPos = {
            left: this.gameSize.w / 6,
            top: this.gameSize.h / 1.2
        }

        this.enemiesVel = {
            left: 3,
            top: 0
        }

        this.init()
    }


    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundImage = 'url(./img/raccoon-roll.gif)';
        this.enemiesElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.enemiesElement)
    }

    enemiesBorderCollision() {

        if (
            this.enemiesPos.left < this.gameSize.w / 9 || this.enemiesPos.left > this.gameSize.w / 2.7
        ) {
            this.enemiesVel.left *= -1
        }

    }

    move() {
        this.enemiesBorderCollision()

        this.enemiesPos.left += this.enemiesVel.left;

        this.updatePosition();
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }
}


class Enemies6 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: 80,
            h: 80
        }

        this.enemiesPos = {

            left: this.gameSize.w / 30,
            top: this.gameSize.h / 2.5
        }

        this.enemiesVel = {
            left: 5,
            top: 0
        }

        this.init()
    }


    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundImage = 'url(./img/raccoon-roll.gif)';
        this.enemiesElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.enemiesElement)
    }


    enemiesBorderCollision() {

        if (
            this.enemiesPos.left > this.gameSize.w / 6 || this.enemiesPos.left < this.gameSize.w / 30
        ) {
            this.enemiesVel.left *= -1
        }

    }

    move() {
        this.enemiesBorderCollision()

        this.enemiesPos.left += this.enemiesVel.left;

        this.updatePosition();
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }
}


class Enemies7 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: 80,
            h: 80
        }

        this.enemiesPos = {

            left: gameSize.w / 4.5,
            top: gameSize.h / 9
        }

        this.enemiesVel = {
            left: 0,
            top: 10
        }

        this.init()
    }


    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundImage = 'url(./img/raccoon-roll.gif)';
        this.enemiesElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.enemiesElement)
    }


    enemiesBorderCollision() {

        if (
            this.enemiesPos.top > this.gameSize.h / 1.45 || this.enemiesPos.top < this.gameSize.h / 9
        ) {
            this.enemiesVel.top *= -1
        }


    }

    move() {
        this.enemiesBorderCollision()

        this.enemiesPos.top += this.enemiesVel.top;

        this.updatePosition();
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }
}