// Score match

const playerScore = document.getElementById('player-score')
const drawScore = document.getElementById('draw-score')
const computerScore = document.getElementById('computer-score')


// buttons plays 

const buttons = document.querySelectorAll('.choice-icon')

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

console.log(rockButton);
console.log(paperButton);
console.log(scissorsButton);

// Reset

const buttonReset = document.getElementById('reset')

console.log(buttons);


// Result play

const playerResult = document.getElementById('player-choice')
const computerResult = document.getElementById('computer-choice') 


console.log(playerResult,computerResult);


// Result Message 

const resultMessage = document.querySelector('.result-message')



// Points

let pointPlayer = 0

let pointComputer = 0

let pointDraw = 0


const choice = ["👊", "✋", "✌️"];



function getComputerChoice() {
    const indiceChoice = Math.floor(Math.random() * choice.length)
    const getEmoji = choice[indiceChoice]    
    return getEmoji
}


function determinesWinner(player , computer) {
    if(player === computer) {
        return 'Empate'
    }else if (player === '👊' && computer === '✌️' || 
        player === '✌️' && computer === '✋' || 
        player === '✋' && computer === '👊') {
        return 'Ganhou'
    } else {
        return 'Perdeu'
    } 
}

function updateScoreboard() {
    playerScore.textContent = pointPlayer

    drawScore.textContent = pointDraw

    computerScore.textContent = pointComputer

}


function showMessageResult(result) {
    switch(result) {

        case 'Empate':
            resultMessage.textContent = 'Empatou! Jogue novamente !';
        break;
    
        case 'Ganhou':
            resultMessage.textContent = 'Você ganhou ! Parabéns.';
        break

        default :
            resultMessage.textContent = 'Que pena perdeu ! Jogue novamente.';
        
    }

    
    console.log(resultMessage)
    console.log(resultMessage.textContent)
}


function playGame (playerChoice) {
    const computerChoice = getComputerChoice()

    computerResult.textContent = computerChoice

    playerResult.textContent = playerChoice

    const checkWinner = determinesWinner(playerChoice , computerChoice)


    if (checkWinner === 'Empate') {
        pointDraw++
    } else if (checkWinner === 'Ganhou') {
        pointPlayer++
    } else {
        pointComputer++
    }

    updateScoreboard()

    showMessageResult(checkWinner)

}


rockButton.addEventListener('click' , function() {
    playGame('👊')
})

paperButton.addEventListener('click', function() {
    playGame('✋')
})

scissorsButton.addEventListener('click' , function() {
    playGame('✌️')
})


function restart() {
    // ZERAR AS VARIÁVEIS (memória do JavaScript)
    pointPlayer = 0
    pointComputer = 0
    pointDraw = 0


    // score restart

    playerScore.textContent = 0
    drawScore.textContent = 0
    computerScore.textContent = 0

    // Result restart
    playerResult.textContent = "?"
    computerResult.textContent = '?'

    // Message restart

    resultMessage.textContent = 'Faça sua escolha para começar !'

    
}


buttonReset.addEventListener('click', function() {
    restart()
})



