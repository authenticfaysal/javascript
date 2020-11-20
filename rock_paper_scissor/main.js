/*
### Rock Paper Scissor ###

*) Scissor beats Paper
*) Paper beats Rock
*) Rock beats Scissor


** RPS is played between 2 person or person vs bot/computer for 5 rounds
** First player selects scissor/rock/paper
** Computer also selects from scissor/rock/paper
** Check if both selection are same, if it's same then its a tie
** Checks if player selection beats computer's or vice-versa

*/

function userPlay(){

    let userChoice = '';
    let options = ['rock', 'paper', 'scissor'];

    while (!options.includes(userChoice.toLowerCase())) {
        userChoice = prompt("Choose Rock/Paper/Scissor!");
    } 
    return userChoice;
}


function computerPlay() {

    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'paper';
    } else if (computerChoice === 3) {
        return 'scissor';   
    }
}


function playRound(player, computer){

    if (player === computer){
        return "It's a tie!";
    } else if(player === 'rock' && computer === 'scissor'){
        return "Player won! Rock beats Scissor!";
    } else if (player === 'scissor' && computer === 'paper'){
        return "Player Won! Scissor beats Paper!";
    } else if (player === 'paper' && computer === 'rock'){
        return "Player Won! Paper beats Rock!";
    } else {
        return "Computer Won! " + computer.toUpperCase() + " beats " + player.toUpperCase() + "!";
    }
}

function game(){
    let random = 0;
    let player;
    let computer;
    for (random; random < 5; random++){
        player = userPlay();
        computer = computerPlay();
        result = playRound(player, computer);
        console.log(result);
    }
}