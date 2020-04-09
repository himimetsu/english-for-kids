
export class Card {
  static createCard(word, path) {
    const card = document.createElement('div')
    card.classList.add('card')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    if (path) {
      img.src = ``
    } else {
      img.src = `../../../dist/img/${word}.jpg`
    }
    const figcaption = document.createElement('figcaption')
    figure.appendChild(img)
    figure.appendChild(figcaption)
    const textFigure = document.createTextNode(`${word}`)
    figcaption.appendChild(textFigure)
    card.appendChild(figure)
    return card
  }
}