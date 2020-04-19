import createButton from '../UI/GameButton/GameButton'
import createCard from '../UI/card/card'

const createSection = (arrSection, arrCards, key) => {
  const sections = document.createElement('div')
  sections.classList.add('sections')

  arrSection.map((item, index) => {
    const section = document.createElement('div')
    arrCards[index].map((card) => {
      section.appendChild(createCard([card.word, card.translation], key))

      return true
    })

    section.appendChild(createButton())
    section.classList.add('section')
    section.classList.add('hidden')
    section.classList.add(`${item.replace(/\s/igu, '-')}`)
    sections.appendChild(section)

    return true
  })

  return sections
}
export default createSection