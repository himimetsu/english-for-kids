import player from '../../scripts/audioPlayer'
const startGame = () => {
  console.log('Game started!')
}

const gameButton = () => {
  const button = document.createElement('button')
  button.classList.add('game-button')
  button.classList.add('hidden')
  button.setAttribute('type', 'button')
  button.appendChild(document.createTextNode('START GAME'))
  button.addEventListener('click', startGame)
  const shellButton = document.createElement('div')
  shellButton.classList.add('shell-button')
  shellButton.appendChild(button)

  return shellButton
}

const createGameButton = () => gameButton()
export default createGameButton