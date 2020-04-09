import { Card } from '../UI/card/card'
import { cards } from '../DATA/cards'

export class MainPage {
  static createMainPage() {
    const mainPage = document.createElement('div')
    mainPage.classList.add('main-page')
    const allCategories = []

    cards.map((item, i) => {
      if (cards[0][i]) {
        allCategories.push(cards[0][i])
      }
    })

    allCategories.map((category) => {
      mainPage.appendChild(Card.createCard(category))
    })

    return mainPage
  }
}