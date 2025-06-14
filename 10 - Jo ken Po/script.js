const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    playTheGame(humanChoice, machineChoice);
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; // Retorna escolha aleatória
}

const playTheGame = (human, machine) => {
    console.log("humano: " + human + " máquina: " + machine);

    if (human === machine) {
        result.innerHTML = "Empate!";
    } else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
               (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
               (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber; // Atualiza pontuação do humano
        result.innerHTML = "Você ganhou!";
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber; // Atualiza pontuação da máquina
        result.innerHTML = "Você perdeu!";
    }
}