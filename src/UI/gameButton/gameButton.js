import cards from '../../DATA/cards'
import end from '../../scripts/Ending'
import hideMenu from '../../scripts/hideMenu'
import player from '../../scripts/audioPlayer'
import searchSection from '../../scripts/searchActiveSection'
import shuffle from '../../scripts/shuffle'

const searchBtnOfSection = () => document.getElementsByClassName(searchSection())[0].getElementsByClassName('shell-button')[0].getElementsByClassName('game-button')[0]

let currentArray = []
let currentClick = ''
let error = 0
let success = 0

const toggleTextBtn = () => {
  const active = document.getElementsByClassName(searchSection())[0]
  active.getElementsByClassName('game-start')[0].classList.add('hidden')
  active.getElementsByClassName('game-repeat')[0].classList.remove('hidden')
}

const right = (event) => {
  console.log(event.target.parentNode)
  event.target.parentNode.classList.add('non-click')
  success += 1
  player('Game', 'correct')
  currentArray.splice(0, 1)
  if (currentArray.length === 0) {
    end(error, success)
    error = 0
    success = 0
  }
}

const wrong = () => {
  player('Game', 'error')
  error += 1
}

const cardClick = (event) => {
  if (Array.from(document.getElementsByClassName('main-content')[0].classList).includes('play')) {
    if (event.target.localName === 'img') {
      currentClick = event.target.nextSibling.childNodes[0].innerText
      if (currentClick === currentArray[0]) {
        event.target.parentNode.previousSibling.classList.remove('hidden')
        right(event)
        setTimeout(() => {
          player(searchSection().replace(/-/igu, ' '), currentArray[0])
        }, 1000)
      } else {
        wrong()
      }
    }
  }
}
document.addEventListener('click', (event) => cardClick(event))

const createGameArray = () => {
  searchBtnOfSection().classList.add('repeat')
  toggleTextBtn()

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
    createGameArray()
  }
}

const createTextGameButton = () => {
  const frag = document.createDocumentFragment()

  const spanGameStart = document.createElement('span')
  spanGameStart.classList.add('game-start')
  spanGameStart.appendChild(document.createTextNode('START GAME'))

  const spanGameRepeat = document.createElement('span')
  spanGameRepeat.className = 'game-repeat hidden'
  spanGameRepeat.appendChild(document.createTextNode('REPEAT'))

  frag.appendChild(spanGameStart)
  frag.appendChild(spanGameRepeat)

  return frag
}

const gameButton = () => {
  const button = document.createElement('button')
  button.classList.add('game-button')
  button.setAttribute('type', 'button')
  button.appendChild(createTextGameButton())
  button.addEventListener('click', startGame)

  const shellButton = document.createElement('div')
  shellButton.classList.add('shell-button')
  shellButton.classList.add('hidden')
  shellButton.appendChild(button)

  return shellButton
}

const createGameButton = () => gameButton()
export default createGameButton