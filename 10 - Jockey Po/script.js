const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    playTheGame(humanChoice, machineChoice);
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; // Retorna escolha aleatória
}

const playTheGame = (human, machine) => {
    console.log("humano: " + human + " máquina: " + machine);

    if (human === machine) {
        result.innerHTML = "Empate!";
    } else if ((human === "paper" && machine === "rock") ||
               (human === "rock" && machine === "scissors") ||
               (human === "scissors" && machine === "paper")) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber; // Atualiza pontuação do humano
        result.innerHTML = "Você ganhou!";
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber; // Atualiza pontuação da máquina
        result.innerHTML = "Você perdeu!";
    }
}