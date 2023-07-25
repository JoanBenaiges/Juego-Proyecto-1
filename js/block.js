
class Block1 {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.playerPos = playerPos
        this.playerSize = playerSize

        this.blockSize = {
            w: innerWidth / 2.333,
            h: innerWidth / 100
        }

        this.blockPos = {
            left: innerWidth - this.blockSize.w,
            top: innerHeight / 1.25
        }

        this.init()
    }

    init() {
        this.blockElement = document.createElement('div')

        this.blockElement.style.position = "absolute"
        this.blockElement.style.width = `${this.blockSize.w}px`
        this.blockElement.style.height = `${this.blockSize.h}px`
        this.blockElement.style.left = `${this.blockPos.left}px`
        this.blockElement.style.top = `${this.blockPos.top}px`
        this.blockElement.style.backgroundColor = 'brown'

        this.gameScreen.appendChild(this.blockElement)

    }

}

class Block2 {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.playerPos = playerPos
        this.playerSize = playerSize
        this.blockSize = {
            w: innerWidth / 3,
            h: innerWidth / 100
        }

        this.blockPos = {
            left: 0,
            top: innerHeight / 1.25
        }

        this.init()
    }

    init() {
        this.blockElement = document.createElement('div')

        this.blockElement.style.position = "absolute"
        this.blockElement.style.width = `${this.blockSize.w}px`
        this.blockElement.style.height = `${this.blockSize.h}px`
        this.blockElement.style.left = `${this.blockPos.left}px`
        this.blockElement.style.top = `${this.blockPos.top}px`
        this.blockElement.style.backgroundColor = 'brown'

        this.gameScreen.appendChild(this.blockElement)

    }

}


class Block3 {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.playerPos = playerPos
        this.playerSize = playerSize
        this.blockSize = {
            w: innerWidth / 100,
            h: innerHeight / 1.25
        }

        this.blockPos = {
            left: innerWidth / 2.5,
            top: innerHeight - this.blockSize.h
        }

        this.init()
    }

    init() {
        this.blockElement = document.createElement('div')

        this.blockElement.style.position = "absolute"
        this.blockElement.style.width = `${this.blockSize.w}px`
        this.blockElement.style.height = `${this.blockSize.h}px`
        this.blockElement.style.left = `${this.blockPos.left}px`
        this.blockElement.style.top = `${this.blockPos.top}px`
        this.blockElement.style.backgroundColor = 'brown'

        this.gameScreen.appendChild(this.blockElement)

    }

}

class Block4 {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.playerPos = playerPos
        this.playerSize = playerSize
        this.blockSize = {
            w: innerWidth / 100,
            h: innerHeight / 2
        }

        this.blockPos = {
            left: innerWidth / 5,
            top: 0
        }

        this.init()
    }

    init() {
        this.blockElement = document.createElement('div')

        this.blockElement.style.position = "absolute"
        this.blockElement.style.width = `${this.blockSize.w}px`
        this.blockElement.style.height = `${this.blockSize.h}px`
        this.blockElement.style.left = `${this.blockPos.left}px`
        this.blockElement.style.top = `${this.blockPos.top}px`
        this.blockElement.style.backgroundColor = 'brown'

        this.gameScreen.appendChild(this.blockElement)

    }

}

class Block5 {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.playerPos = playerPos
        this.playerSize = playerSize
        this.blockSize = {
            w: innerWidth / 100,
            h: innerHeight / 2
        }

        this.blockPos = {
            left: innerWidth / 1.25,
            top: this.blockSize
        }

        this.init()
    }

    init() {
        this.blockElement = document.createElement('div')

        this.blockElement.style.position = "absolute"
        this.blockElement.style.width = `${this.blockSize.w}px`
        this.blockElement.style.height = `${this.blockSize.h}px`
        this.blockElement.style.left = `${this.blockPos.left}px`
        this.blockElement.style.top = `${this.blockPos.top}px`
        this.blockElement.style.backgroundColor = 'brown'

        this.gameScreen.appendChild(this.blockElement)

    }

}

class Block6 {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.playerPos = playerPos
        this.playerSize = playerSize
        this.blockSize = {
            w: innerWidth / 100,
            h: innerHeight / 2
        }

        this.blockPos = {
            left: innerWidth / 1.75,
            top: innerHeight / 3.2
        }
        this.init()
    }

    init() {
        this.blockElement = document.createElement('div')

        this.blockElement.style.position = "absolute"
        this.blockElement.style.width = `${this.blockSize.w}px`
        this.blockElement.style.height = `${this.blockSize.h}px`
        this.blockElement.style.left = `${this.blockPos.left}px`
        this.blockElement.style.top = `${this.blockPos.top}px`
        this.blockElement.style.backgroundColor = 'brown'

        this.gameScreen.appendChild(this.blockElement)

    }

}