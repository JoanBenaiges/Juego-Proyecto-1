function openTheGame() {
    window.location.href = "Game.html";
}

const btnIniciar = document.getElementById("btnIniciar");
btnIniciar.addEventListener("click", openTheGame);