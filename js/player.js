class Player {
    constructor(gameScreen, gameSize, keys, walls) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.keys = keys;
        this.walls = walls;
        this.counterItem = 0

        this.playerSize = {
            w: 80,
            h: 80,
        };

        this.playerPos = {
            left: gameSize.w / 1.2,
            top: gameSize.h / 1.15,
        };

        this.playerVel = {
            left: 15,
            top: 15,
        };

        this.init();
    }

    init() {
        this.playerElement = document.createElement('div')

        this.playerElement.style.position = 'absolute';
        this.playerElement.style.width = `${this.playerSize.w}px`;
        this.playerElement.style.height = `${this.playerSize.h}px`;
        this.playerElement.style.left = `${this.playerPos.left}px`;
        this.playerElement.style.top = `${this.playerPos.top}px`;
        this.playerElement.style.backgroundImage = 'url(./img/whiteDog.gif)';
        this.playerElement.style.backgroundSize = 'cover';


        this.gameScreen.appendChild(this.playerElement);
    }

    move() {
        this.collisionDetection();
        this.updatePosition();

    }

    moveLeft() {
        this.playerPos.left -= this.playerVel.left;

    }

    moveRight() {
        this.playerPos.left += this.playerVel.left;

    }

    moveTop() {
        this.playerPos.top -= this.playerVel.top;

    }

    moveBottom() {
        this.playerPos.top += this.playerVel.top;

    }

    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`;
        this.playerElement.style.top = `${this.playerPos.top}px`;
    }


    collisionDetection() {
        // Colisiones con los bordes
        if (this.playerPos.left < this.walls[2].wallSize.w) {
            this.playerPos.left = this.walls[2].wallSize.w;
        }

        if (this.playerPos.left + this.playerSize.w > this.gameSize.w - this.walls[3].wallSize.w) {
            this.playerPos.left = this.gameSize.w - this.playerSize.w - this.walls[3].wallSize.w;
        }

        if (this.playerPos.top < this.walls[1].wallSize.h) {
            this.playerPos.top = this.walls[1].wallSize.h;
        }

        if (this.playerPos.top + this.playerSize.h > this.gameSize.h - this.walls[0].wallSize.h) {
            this.playerPos.top = this.gameSize.h - this.playerSize.h - this.walls[0].wallSize.h;
        }
    }

    collisionDetectionWithBlocks(blocks) {
        //Colisiones con los bloques
        for (const block of blocks) {
            if (
                this.playerPos.left < block.blockPos.left + block.blockSize.w &&
                this.playerPos.left + this.playerSize.w > block.blockPos.left &&
                this.playerPos.top < block.blockPos.top + block.blockSize.h &&
                this.playerPos.top + this.playerSize.h > block.blockPos.top
            ) {

                alert("GAME OVER")

            };

        }
    }

    collisionDetectionWithEnemies(enemies) {
        //Colisiones con los enemigos
        for (const enemy of enemies) {
            if (
                this.playerPos.left < enemy.enemiesPos.left + enemy.enemiesSize.w &&
                this.playerPos.left + this.playerSize.w > enemy.enemiesPos.left &&
                this.playerPos.top < enemy.enemiesPos.top + enemy.enemiesSize.h &&
                this.playerPos.top + this.playerSize.h > enemy.enemiesPos.top
            ) {
                alert("GAME OVER");
            }
        }
    }


    collisionDetectionWithItems(items) {
        // Colisiones con los items
        for (let i = items.length - 1; i >= 0; i--) {
            const item = items[i];
            if (
                this.playerPos.left < item.itemPos.left + item.itemSize.w &&
                this.playerPos.left + this.playerSize.w > item.itemPos.left &&
                this.playerPos.top < item.itemPos.top + item.itemSize.h &&
                this.playerPos.top + this.playerSize.h > item.itemPos.top &&
                !item.collected // Verificar si el item no está recolectado
            ) {
                item.itemElement.remove();
                item.collected = true; // Marcar el item como recolectado
                this.counterItem = this.counterItem + 1
                console.log(this.counterItem);
                if (this.counterItem === 5) {
                    this.door = new Door(this.gameScreen, this.gameSize)
                }
            }
        }
    }

    roadToExit() {
        if (this.counterItem === 5 &&
            this.playerPos.left >= this.gameSize.w / 1.125 &&
            this.playerPos.top >= this.gameSize.h / 1.15) {

            alert("YOU WIN")
        }
    }

}

