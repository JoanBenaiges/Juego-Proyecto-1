class Wall {

    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.wallSize = {
            w: innerWidth,
            h: 30
        }

        this.wallPos = {
            left: 0,
            top: gameSize.h - this.wallSize.h
        }

        this.init()
    }

    init() {
        this.wallElement = document.createElement('div')

        this.wallElement.style.position = "absolute"
        this.wallElement.style.width = `${this.wallSize.w}px`
        this.wallElement.style.height = `${this.wallSize.h}px`
        this.wallElement.style.left = `${this.wallPos.left}px`
        this.wallElement.style.top = `${this.wallPos.top}px`
        this.wallElement.style.backgroundColor = 'green'

        this.gameScreen.appendChild(this.wallElement)

    }
}


class Wall2 extends Wall {

    constructor(gameScreen, gameSize,) {

        super();
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.wallSize = {
            w: innerWidth,
            h: 30
        }

        this.wallPos = {
            left: 0,
            top: 0
        }

        this.init()
    }
}



class Wall3 {

    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.wallSize = {
            w: 30,
            h: innerHeight
        }

        this.wallPos = {
            left: 0,
            top: 0
        }

        this.init()
    }

    init() {
        this.wallElement = document.createElement('div')

        this.wallElement.style.position = "absolute"
        this.wallElement.style.width = `${this.wallSize.w}px`
        this.wallElement.style.height = `${this.wallSize.h}px`
        this.wallElement.style.left = `${this.wallPos.left}px`
        this.wallElement.style.top = `${this.wallPos.top}px`
        this.wallElement.style.backgroundColor = 'green'

        this.gameScreen.appendChild(this.wallElement)

    }



}

class Wall4 {

    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.wallSize = {
            w: 30,
            h: innerHeight
        }

        this.wallPos = {
            left: innerWidth - this.wallSize.w,
            top: 0
        }

        this.init()
    }

    init() {
        this.wallElement = document.createElement('div')

        this.wallElement.style.position = "absolute"
        this.wallElement.style.width = `${this.wallSize.w}px`
        this.wallElement.style.height = `${this.wallSize.h}px`
        this.wallElement.style.left = `${this.wallPos.left}px`
        this.wallElement.style.top = `${this.wallPos.top}px`
        this.wallElement.style.backgroundColor = 'green'

        this.gameScreen.appendChild(this.wallElement)

    }



}