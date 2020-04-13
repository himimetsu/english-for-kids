import cards from '../../DATA/cards'
import hideMenu from '../../scripts/hideMenu'
import player from '../../scripts/audioPlayer'
import searchSection from '../../scripts/searchActiveSection'
import shuffle from '../../scripts/shuffle'

const searchBtnOfSection = () => document.getElementsByClassName(searchSection())[0].getElementsByClassName('shell-button')[0].getElementsByClassName('game-button')[0]

let currentArray = []
let currentClick = ''

const cardClick = (event) => {
  if (Array.from(document.getElementsByClassName('main-content')[0].classList).includes('play')) {
    if (event.target.localName === 'img') {
      currentClick = event.target.nextSibling.innerText

      if (currentClick === currentArray[0]) {
        player('Game', 'success')
        currentArray.splice(0, 1)
        setTimeout(() => {
          player(searchSection().replace(/-/igu, ' '), currentArray[0])
        }, 2000)
      } else {
        player('Game', 'error')
      }
    }
  }
}

const createGameArray = () => {
  searchBtnOfSection().classList.add('repeat')
  let gameArray = []
  cards[1][cards[0][1].indexOf(searchSection().replace(/-/igu, ' '))].map((item) => {
    gameArray.push(item.word)

    return true
  })
  gameArray = shuffle(gameArray)
  currentArray = gameArray
  player(searchSection().replace(/-/igu, ' '), currentArray[0])

  return gameArray
}

const startGame = () => {
  hideMenu()
  if (Array.from(searchBtnOfSection().classList).includes('repeat')) {
    player(searchSection().replace(/-/igu, ' '), currentArray[0])
  } else {
    document.getElementsByClassName(searchSection())[0].addEventListener('click', (event) => cardClick(event))
    createGameArray()
  }
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