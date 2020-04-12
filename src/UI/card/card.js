const toggleMenu = (event) => {
    document.getElementsByClassName('main-page')[0].classList.add('hidden')
    document.getElementsByClassName('menu')[0].classList.remove('openMenu')
    let currentClick = event.target.parentNode.parentNode.innerText.replace(/\s/igu, '-')
    const sections = Array.from(document.getElementsByClassName('section'))
    sections.map((section) => section.classList.add('hidden'))
    document.getElementsByClassName(`${currentClick}`)[0].classList.remove('hidden')
const addCardAnimation = (event) => {
  event.target.parentNode.parentNode.classList.add('card-animation')
}
const removeCardAnimation = (event, word) => {
  event.target.classList.remove('card-animation')
}
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
    img.src = `../../../dist/images/cards/${word}.jpg`
  }
  card.appendChild(createFigure(word, img))

  return card
}
export default createCard