import cards from '../../DATA/cards'
import hideMenu from '../../scripts/hideMenu'
import player from '../../scripts/audioPlayer'
import searchSection from '../../scripts/searchActiveSection'
import shuffle from '../../scripts/shuffle'

const createGameArray = () => {
  document.getElementsByClassName(searchSection())[0].getElementsByClassName('shell-button')[0].getElementsByClassName('game-button')[0].classList.add('repeat')
  let gameArray = []
  cards[1][cards[0][1].indexOf(searchSection().replace(/-/igu, ' '))].map((item) => {
    gameArray.push(item.word)

    return true
  })
  gameArray = shuffle(gameArray)
  console.log(gameArray)
}

const startGame = () => {
  hideMenu()
  createGameArray()
}

const gameButton = () => {
  const button = document.createElement('button')
  button.classList.add('game-button')
  button.setAttribute('type', 'button')
  button.appendChild(document.createTextNode('START GAME'))
  button.addEventListener('click', startGame)
  const shellButton = document.createElement('div')
  shellButton.classList.add('shell-button')
  shellButton.classList.add('hidden')
  shellButton.appendChild(button)

  return shellButton
}

const createGameButton = () => gameButton()
export default createGameButton