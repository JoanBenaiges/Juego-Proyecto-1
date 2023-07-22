const Game = {
    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    background: undefined,
    wall: undefined,
    obstaclesX: undefined,

    init() {
        this.setDimensions()
        this.start()
    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    start() {
        this.createElement()


    },

    createElement() {
        this.background = new Background(this.gameScreen, this.gameSize)
        this.wall = new Wall(this.gameScreen, this.gameSize)
        this.wall2 = new Wall2(this.gameScreen, this.gameSize)
        this.wall3 = new Wall3(this.gameScreen, this.gameSize)
        this.wall4 = new Wall4(this.gameScreen, this.gameSize)
        this.obstaclesX = new ObstaclesX(this.gameScreen, this.gameSize)
    },

}