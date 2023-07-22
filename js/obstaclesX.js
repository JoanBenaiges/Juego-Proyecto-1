class ObstaclesX {

    constructor(gameScreen, gameSize,) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.obstaclesXSize = {
            w: 20,
            h: 30
        }

        this.obstaclesXPos = {
            left: 25,
            top: 30
        }

        this.init()
    }

    init() {
        this.obsXElement = document.createElement('div')

        this.obsXElement.style.position = "absolute"
        this.obsXElement.style.width = `${this.obstaclesXSize.w}px`
        this.obsXElement.style.height = `${this.obstaclesXSize.h}px`
        this.obsXElement.style.left = `${this.obstaclesXPo.left}px`
        this.obsXElement.style.top = `${this.obstaclesXPo.top}px`
        this.obsXElement.style.backgroundColor = 'blue'

        this.gameScreen.appendChild(this.obsXElement)

    }



}
