// Seleciona o elemento que mostra a pontuação do jogador
const playerScore = document.getElementById('player-score')
// Seleciona o elemento que mostra a pontuação de empates
const drawScore = document.getElementById('draw-score')
// Seleciona o elemento que mostra a pontuação do computador
const computerScore = document.getElementById('computer-score')

// Seleciona todos os botões de escolha do jogador
const buttons = document.querySelectorAll('.choice-icon')

// Seleciona o botão Pedra
const rockButton = document.getElementById('rock')
// Seleciona o botão Papel
const paperButton = document.getElementById('paper')
// Seleciona o botão Tesoura
const scissorsButton = document.getElementById('scissors')

console.log(rockButton) // Exibe o botão Pedra no console para depuração
console.log(paperButton) // Exibe o botão Papel no console para depuração
console.log(scissorsButton) // Exibe o botão Tesoura no console para depuração

// Seleciona o botão que reinicia o jogo
const buttonReset = document.getElementById('reset')

console.log(buttons) // Exibe a lista de botões de escolha no console

// Seleciona o elemento que exibirá a escolha do jogador
const playerResult = document.getElementById('player-choice')
// Seleciona o elemento que exibirá a escolha do computador
const computerResult = document.getElementById('computer-choice')

console.log(playerResult, computerResult) // Exibe os elementos de resultado no console

// Seleciona o elemento que mostrará a mensagem de resultado
const resultMessage = document.querySelector('.result-message')

// Inicializa a pontuação do jogador
let pointPlayer = 0
// Inicializa a pontuação do computador
let pointComputer = 0
// Inicializa a quantidade de empates
let pointDraw = 0

// Lista de símbolos usados pelo computador para jogar
const choice = ["👊", "✋", "✌️"]

// Retorna a escolha aleatória do computador
function getComputerChoice() {
    const indiceChoice = Math.floor(Math.random() * choice.length) // Gera índice aleatório
    const getEmoji = choice[indiceChoice] // Obtém emoji correspondente ao índice
    return getEmoji // Retorna a escolha do computador
}

// Determina o vencedor entre o jogador e o computador
function determinesWinner(player, computer) {
    if (player === computer) { // Mesma escolha significa empate
        return 'Empate'
    } else if (player === '👊' && computer === '✌️' || 
        player === '✌️' && computer === '✋' || 
        player === '✋' && computer === '👊') { // Combinações em que o jogador vence
        return 'Ganhou'
    } else { // Qualquer outra combinação é derrota do jogador
        return 'Perdeu'
    }
}

// Atualiza o placar visível na página
function updateScoreboard() {
    playerScore.textContent = pointPlayer // Mostra pontos do jogador
    drawScore.textContent = pointDraw // Mostra empates
    computerScore.textContent = pointComputer // Mostra pontos do computador
}

// Exibe mensagem de resultado conforme o resultado da rodada
function showMessageResult(result) {
    switch (result) {
        case 'Empate': // Caso empate
            resultMessage.textContent = 'Empatou! Jogue novamente !'
            break
        case 'Ganhou': // Caso vitória do jogador
            resultMessage.textContent = 'Você ganhou ! Parabéns.'
            break
        default: // Caso derrota do jogador
            resultMessage.textContent = 'Que pena perdeu ! Jogue novamente.'
    }
    console.log(resultMessage) // Mostra o elemento de mensagem no console
    console.log(resultMessage.textContent) // Mostra o texto da mensagem no console
}

// Executa uma rodada do jogo com a escolha do jogador
function playGame(playerChoice) {
    const computerChoice = getComputerChoice() // Obtém a escolha do computador
    computerResult.textContent = computerChoice // Atualiza escolha do computador na tela
    playerResult.textContent = playerChoice // Atualiza escolha do jogador na tela
    const checkWinner = determinesWinner(playerChoice, computerChoice) // Determina vencedor

    if (checkWinner === 'Empate') {
        pointDraw++ // Incrementa pontos de empates
    } else if (checkWinner === 'Ganhou') {
        pointPlayer++ // Incrementa pontos do jogador
    } else {
        pointComputer++ // Incrementa pontos do computador
    }

    updateScoreboard() // Atualiza o placar após a rodada
    showMessageResult(checkWinner) // Mostra a mensagem de resultado
}

// Adiciona evento ao botão Pedra para jogar com Pedra
rockButton.addEventListener('click', function() {
    playGame('👊')
})

// Adiciona evento ao botão Papel para jogar com Papel
paperButton.addEventListener('click', function() {
    playGame('✋')
})

// Adiciona evento ao botão Tesoura para jogar com Tesoura
scissorsButton.addEventListener('click', function() {
    playGame('✌️')
})

// Reinicia o estado do jogo para os valores iniciais
function restart() {
    pointPlayer = 0 // Zera pontos do jogador
    pointComputer = 0 // Zera pontos do computador
    pointDraw = 0 // Zera empates
    playerScore.textContent = 0 // Reseta placar do jogador
    drawScore.textContent = 0 // Reseta placar de empates
    computerScore.textContent = 0 // Reseta placar do computador
    playerResult.textContent = "?" // Reseta exibição da escolha do jogador
    computerResult.textContent = '?' // Reseta exibição da escolha do computador
    resultMessage.textContent = 'Faça sua escolha para começar !' // Reseta mensagem inicial
}

// Adiciona evento ao botão de reset para reiniciar o jogo
buttonReset.addEventListener('click', function() {
    restart()
})
