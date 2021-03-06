import cards from '../../DATA/cards'
import end from '../../scripts/Ending'
import hideMenu from '../../scripts/HideMenu'
import player from '../../scripts/AudioPlayer'
import searchSection from '../../scripts/SearchActiveSection'
import shuffle from '../../scripts/Shuffle'
import stat from '../../scripts/LocalStatistics'

const addStar = (key) => {
  const fieldStar = document.getElementsByClassName('field-stars')[0]
  if (key) {
    const win = document.createElement('img')
    win.src = '/images/cards/star-win.svg'
    fieldStar.insertBefore(win, fieldStar.firstChild)
  } else {
    const wrong = document.createElement('img')
    wrong.src = '/images/cards/star.svg'
    fieldStar.insertBefore(wrong, fieldStar.firstChild)
  }
}

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
  addStar(true)
  event.target.parentNode.classList.add('non-click')
  success += 1
  player('Game', 'correct')
  stat(searchSection(), event.target.classList, ['game', 'right'])
  currentArray.splice(0, 1)
  if (currentArray.length === 0) {
    end(error, success)
    error = 0
    success = 0
  }
}

const wrong = () => {
  addStar(false)
  let wron = ''
  const allEng = Array.from(document.getElementsByClassName(searchSection())[0].getElementsByClassName('eng'))
  allEng.map((eng) => {
    if (eng.innerText === currentArray[0]) {
      wron = eng.parentNode.previousSibling.classList
    }

    return true
  })
  stat(searchSection(), wron, ['game', 'wrong'])
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