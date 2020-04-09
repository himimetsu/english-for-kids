import { cards } from '../DATA/cards'
import { Card } from '../UI/card/card'

export class Section {
  static createSection() {
    const allSections = Array(...cards[0])
    let allCards = []

    cards.map((item,i) => {
      if (cards[i + 1]) {
        allCards.push(cards[i + 1])
      }
    })

    const sections = document.createElement('div')
    sections.classList.add('sections')

    allSections.map((item, i) => {
      const section = document.createElement('div')

      allCards[i].map((card) => {
        section.appendChild(Card.createCard(card.word))
      })

      section.classList.add('section')
      section.classList.add('hidden')
      section.classList.add(`${item.replace(/\s/ig, '-')}`)
      sections.appendChild(section)
    })
    return sections
  }
}