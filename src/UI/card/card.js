import cards from '../../DATA/cards'

const toggleMenu = (event) => {
  document.getElementsByClassName('main-page')[0].classList.add('hidden')
  document.getElementsByClassName('menu')[0].classList.remove('openMenu')
  let currentClick = event.target.parentNode.parentNode.innerText.replace(/\s/igu, '-')
  const sections = Array.from(document.getElementsByClassName('section'))
  sections.map((section) => section.classList.add('hidden'))
  document.getElementsByClassName(`${currentClick}`)[0].classList.remove('hidden')
}

const translateWord = (pressCard) => {
  let translate = ''
  const tempSections = Array.from(document.getElementsByClassName('section'))
  tempSections.map((section, index) => {
    if (!Array.from(section.classList).includes('hidden')) {
      for (let jey = 0; jey < cards[1][index].length; jey += 1) {
        if (cards[1][index][jey].word === pressCard) {
          translate = cards[1][index][jey].translation
        }
      }
    }

    return true
  })

  return translate
}

const addCardAnimation = (event) => {
  event.target.parentNode.parentNode.classList.add('card-animation')
}

const changeWord = (event, word) => {
  setTimeout(() => {
    event.target.children[0].children[1].innerText = translateWord(word)
  }, 700)
}

const removeCardAnimation = (event, word) => {
  event.target.classList.remove('card-animation')
  setTimeout(() => {
    event.target.children[0].children[1].innerText = word
  }, 1000)
}

const gameCard = (card, word) => {
  card.addEventListener('click', (event) => addCardAnimation(event, word))
  card.addEventListener('mouseleave', (event) => removeCardAnimation(event, word))
  card.addEventListener('transitionstart', (event) => changeWord(event, word))

  return card
}

const createFigure = (word, img) => {
  const figure = document.createElement('figure')
  const figcaption = document.createElement('figcaption')
  figure.appendChild(img)
  figure.appendChild(figcaption)
  const textFigure = document.createTextNode(`${word}`)
  figcaption.appendChild(textFigure)

  return figure
}

const createCard = (word, path, key) => {
  const card = document.createElement('div')
  card.classList.add('card')
  const img = document.createElement('img')
  if (key) {
    card.addEventListener('click', (event) => toggleMenu(event))
    img.src = `../../../dist/images/cards/${path}.jpg`
  } else {
    gameCard(card, word)
    img.src = `../../../dist/images/cards/${word}.jpg`
  }
  card.appendChild(createFigure(word, img))

  return card
}
export default createCard