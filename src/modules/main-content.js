import createGameButton from '../UI/gameButton/gameButton'
import createSection from './section'

const createMainContent = (arrSections, arrCards) => {
  const content = document.createElement('div')
  content.classList.add('main-content')
  content.appendChild(createSection(arrSections, arrCards, false))
  content.appendChild(createGameButton())

  return content
}
export default createMainContent