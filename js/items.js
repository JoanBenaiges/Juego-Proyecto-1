class Item1 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.collected = false;


        this.itemSize = {
            w: 80,
            h: 80
        }

        this.itemPos = {
            left: this.gameSize.w / 1.075,
            top: this.gameSize.h / 9
        }

        this.init()
    }

    init() {
        this.itemElement = document.createElement('div')

        this.itemElement.style.position = "absolute"
        this.itemElement.style.width = `${this.itemSize.w}px`
        this.itemElement.style.height = `${this.itemSize.h}px`
        this.itemElement.style.left = `${this.itemPos.left}px`
        this.itemElement.style.top = `${this.itemPos.top}px`
        this.itemElement.style.backgroundImage = 'url(./img/key.gif)';
        this.itemElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.itemElement)
    }
}

class Item2 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.itemSize = {
            w: 80,
            h: 80
        }

        this.itemPos = {
            left: this.gameSize.w / 25,
            top: this.gameSize.h / 1.15
        }

        this.init()
    }

    init() {
        this.itemElement = document.createElement('div')

        this.itemElement.style.position = "absolute"
        this.itemElement.style.width = `${this.itemSize.w}px`
        this.itemElement.style.height = `${this.itemSize.h}px`
        this.itemElement.style.left = `${this.itemPos.left}px`
        this.itemElement.style.top = `${this.itemPos.top}px`
        this.itemElement.style.backgroundImage = 'url(./img/key.gif)';
        this.itemElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.itemElement)
    }
}

class Item3 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.itemSize = {
            w: 80,
            h: 80
        }

        this.itemPos = {
            left: this.gameSize.w / 12,
            top: this.gameSize.h / 1.5
        }

        this.init()
    }

    init() {
        this.itemElement = document.createElement('div')

        this.itemElement.style.position = "absolute"
        this.itemElement.style.width = `${this.itemSize.w}px`
        this.itemElement.style.height = `${this.itemSize.h}px`
        this.itemElement.style.left = `${this.itemPos.left}px`
        this.itemElement.style.top = `${this.itemPos.top}px`
        this.itemElement.style.backgroundImage = 'url(./img/key.gif)';
        this.itemElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.itemElement)
    }
}

class Item4 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.itemSize = {
            w: 80,
            h: 80
        }

        this.itemPos = {
            left: this.gameSize.w / 2.2,
            top: this.gameSize.h / 2
        }

        this.init()
    }

    init() {
        this.itemElement = document.createElement('div')

        this.itemElement.style.position = "absolute"
        this.itemElement.style.width = `${this.itemSize.w}px`
        this.itemElement.style.height = `${this.itemSize.h}px`
        this.itemElement.style.left = `${this.itemPos.left}px`
        this.itemElement.style.top = `${this.itemPos.top}px`
        this.itemElement.style.backgroundImage = 'url(./img/key.gif)';
        this.itemElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.itemElement)
    }
}

class Item5 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.itemSize = {
            w: 80,
            h: 80
        }

        this.itemPos = {
            left: this.gameSize.w / 10,
            top: this.gameSize.h / 10
        }

        this.init()
    }

    init() {
        this.itemElement = document.createElement('div')

        this.itemElement.style.position = "absolute"
        this.itemElement.style.width = `${this.itemSize.w}px`
        this.itemElement.style.height = `${this.itemSize.h}px`
        this.itemElement.style.left = `${this.itemPos.left}px`
        this.itemElement.style.top = `${this.itemPos.top}px`
        this.itemElement.style.backgroundImage = 'url(./img/key.gif)';
        this.itemElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.itemElement)
    }
}

