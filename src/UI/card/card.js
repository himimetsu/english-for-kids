import getAllSpan from '../../scripts/GetAllSpan'
import hideMenu from '../../scripts/HideMenu'
import player from '../../scripts/AudioPlayer'
import searchSection from '../../scripts/SearchActiveSection'
import stat from '../../scripts/LocalStatistics'
import used from '../../scripts/Used'

const toggleMenu = (event) => {
  hideMenu()
  document.getElementsByClassName('main-page')[0].classList.add('hidden')
  let currentClick = event.target.parentNode.parentNode.innerText.replace(/\s/igu, '-')
  const sections = Array.from(document.getElementsByClassName('section'))
  sections.map((section) => section.classList.add('hidden'))
  document.getElementsByClassName(`${currentClick}`)[0].classList.remove('hidden')
}

const playAudio = (event) => {
  const currentCard = event.target.parentNode.parentNode.innerText
  if (!document.getElementsByClassName('main-content')[0].classList[1]) {
    let currentClick = ''
    if (event.target.localName === 'span') {
      currentClick = event.target.parentNode.previousSibling.classList
    } else if (event.target.classList.length === 0) {
      currentClick = event.target.parentNode.parentNode.previousSibling.classList
    } else {
      currentClick = event.target.classList
    }
    player(searchSection().replace(/-/igu, ' '), currentCard)
    stat(searchSection().replace(/\s/igu, '-'), currentClick, ['train', null])
  }
}

const addCardAnimation = (event) => {
  hideMenu()
  event.target.parentNode.parentNode.parentNode.parentNode.classList.add('card-animation')
  setTimeout(() => {
    getAllSpan()[0].map((span, index) => {
      if (span.innerText === event.target.previousSibling.textContent) {
        getAllSpan()[0][index].classList.toggle('hidden')
        getAllSpan()[1][index].classList.toggle('hidden')
      }

      return true
    })
  }, 500)
}

const removeCardAnimation = (event) => {
  event.target.classList.remove('card-animation')
  setTimeout(() => {
    getAllSpan()[1].map((span, index) => {
      if (span.innerText === event.target.innerText) {
        getAllSpan()[0][index].classList.toggle('hidden')
        getAllSpan()[1][index].classList.toggle('hidden')
      }

      return true
    })
  }, 700)
}

const gameCard = (card, word) => {
  card.appendChild(used())
  card.addEventListener('mouseleave', (event) => removeCardAnimation(event, word))
  card.addEventListener('click', (event) => playAudio(event))

  return card
}

const eng = (word) => {
  const spanOne = document.createElement('span')
  const img = document.createElement('img')
  img.addEventListener('click', (event) => addCardAnimation(event))
  img.src = '/images/cards/rotate.png'
  spanOne.classList.add('eng')
  spanOne.appendChild(document.createTextNode(`${word}`))
  spanOne.appendChild(img)

  return spanOne
}

const createFigcaption = (word, translation) => {
  const fig = document.createElement('figcaption')
  fig.appendChild(eng(word))
  const spanTwo = document.createElement('span')
  spanTwo.className = 'rus hidden'
  spanTwo.appendChild(document.createTextNode(`${translation}`))
  fig.appendChild(spanTwo)

  return fig
}

const createFigure = (word, img, translation) => {
  const figure = document.createElement('figure')
  figure.appendChild(img)
  if (translation) {
    figure.appendChild(createFigcaption(word, translation))
    figure.classList.add('card-figure')
  } else {
    const figcaption = document.createElement('figcaption')
    const textFigcaption = document.createTextNode(`${word}`)
    figcaption.appendChild(textFigcaption)
    figure.appendChild(figcaption)
  }

  return figure
}

let iter = 0

const createCard = (arr, key) => {
  const card = document.createElement('div')
  const img = document.createElement('img')
  card.classList.add('card')
  if (key) {
    card.addEventListener('click', (event) => toggleMenu(event))
    img.src = `/images/cards/${arr[0]}.jpg`
    card.appendChild(createFigure(arr[0], img))
  } else {
    gameCard(card, arr[0])
    img.src = `/images/cards/${arr[0]}.jpg`
    img.classList.add(`statistics${iter}`)
    iter += 1
    card.appendChild(createFigure(arr[0], img, arr[1]))
  }

  return card
}
export default createCard