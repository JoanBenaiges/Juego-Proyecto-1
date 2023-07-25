const Game = {
    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    background: undefined,

    wall: undefined,
    wall2: undefined,
    wall3: undefined,
    wall4: undefined,

    block1: undefined,
    block2: undefined,
    block3: undefined,
    block4: undefined,
    block5: undefined,
    block6: undefined,

    enemies: undefined,
    enemies2: undefined,
    enemies3: undefined,
    enemies4: undefined,
    enemies5: undefined,
    enemies6: undefined,
    enemies7: undefined,

    door: undefined,

    player: undefined,

    counterItem: 0,

    keys: { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight', UP: 'ArrowUp', DOWN: 'ArrowDown' },

    init() {
        this.setDimensions()
        this.start()
    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px `
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    start() {
        this.createElement()
        this.setEventListeners()
        this.gameLoop()
    },

    setEventListeners() {
        document.onkeydown = event => {
            switch (event.code) {
                case this.keys.LEFT:
                    this.player.moveLeft()
                    break

                case this.keys.RIGHT:
                    this.player.moveRight()
                    break;

                case this.keys.UP:
                    this.player.moveTop()
                    break;

                case this.keys.DOWN:
                    this.player.moveBottom()
                    break;
            }
        }
    },

    createElement() {
        this.background = new Background(this.gameScreen, this.gameSize)

        this.wall = new Wall(this.gameScreen, this.gameSize)
        this.wall2 = new Wall2(this.gameScreen, this.gameSize)
        this.wall3 = new Wall3(this.gameScreen, this.gameSize)
        this.wall4 = new Wall4(this.gameScreen, this.gameSize)

        this.block1 = new Block1(this.gameScreen, this.gameSize)
        this.block2 = new Block2(this.gameScreen, this.gameSize)
        this.block3 = new Block3(this.gameScreen, this.gameSize)
        this.block4 = new Block4(this.gameScreen, this.gameSize)
        this.block5 = new Block5(this.gameScreen, this.gameSize)
        this.block6 = new Block6(this.gameScreen, this.gameSize)

        this.enemies = new Enemies(this.gameScreen, this.gameSize)
        this.enemies2 = new Enemies2(this.gameScreen, this.gameSize)
        this.enemies3 = new Enemies3(this.gameScreen, this.gameSize)
        this.enemies4 = new Enemies4(this.gameScreen, this.gameSize)
        this.enemies5 = new Enemies5(this.gameScreen, this.gameSize)
        this.enemies6 = new Enemies6(this.gameScreen, this.gameSize)
        this.enemies7 = new Enemies7(this.gameScreen, this.gameSize)

        this.item1 = new Item1(this.gameScreen, this.gameSize)
        this.item2 = new Item2(this.gameScreen, this.gameSize)
        this.item3 = new Item3(this.gameScreen, this.gameSize)
        this.item4 = new Item4(this.gameScreen, this.gameSize)
        this.item5 = new Item5(this.gameScreen, this.gameSize)

        // Pasamos las instancias de las paredes al jugador
        this.player = new Player(this.gameScreen, this.gameSize, this.keys, [this.wall, this.wall2, this.wall3, this.wall4]);
    },

    gameLoop() {
        this.drawAll();
        this.player.collisionDetectionWithBlocks([this.block1, this.block2, this.block3, this.block4, this.block5, this.block6]);
        this.player.collisionDetectionWithEnemies([this.enemies, this.enemies2, this.enemies3, this.enemies4, this.enemies5, this.enemies6, this.enemies7])
        this.player.collisionDetectionWithItems([this.item1, this.item2, this.item3, this.item4, this.item5]);
        this.player.roadToExit()

        window.requestAnimationFrame(() => this.gameLoop());
    },

    drawAll() {
        this.player.move()
        this.enemies.move();
        this.enemies2.move();
        this.enemies3.move();
        this.enemies4.move();
        this.enemies5.move();
        this.enemies6.move();
        this.enemies7.move();

    },


    getEnemiesPositions() {
        return [
            this.enemies.enemiesPos,
            this.enemies2.enemiesPos,
            this.enemies3.enemiesPos,
            this.enemies4.enemiesPos,
            this.enemies5.enemiesPos,
            this.enemies6.enemiesPos,
            this.enemies7.enemiesPos,
        ];
    },



};