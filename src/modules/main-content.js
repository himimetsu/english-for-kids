import createSection from './section'

const createMainContent = (arrSections, arrCards, key) => {
  const content = document.createElement('div')
  content.classList.add('main-content')
  content.appendChild(createSection(arrSections, arrCards, key))

  return content
}
export default createMainContent