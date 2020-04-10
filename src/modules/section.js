import createCard from '../UI/card/card'

const createSection = (arrSection, arrCards) => {
  const sections = document.createElement('div')
  sections.classList.add('sections')

  arrSection.map((item, index) => {
    const section = document.createElement('div')
    arrCards[index].map((card) => {
      section.appendChild(createCard(card.word, item))
    })

    section.classList.add('section')
    section.classList.add('hidden')
    section.classList.add(`${item.replace(/\s/igu, '-')}`)
    sections.appendChild(section)
  })

  return sections
}
export default createSection