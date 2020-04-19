import createSection from './section'

const createResultStar = () => {
  const div = document.createElement('div')
  div.classList.add('field-stars')

  return div
}

const createMainContent = (arrSections, arrCards) => {
  const content = document.createElement('div')
  content.classList.add('main-content')
  content.appendChild(createResultStar())
  content.appendChild(createSection(arrSections, arrCards, false))

  return content
}
export default createMainContent