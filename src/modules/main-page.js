import createCard from '../UI/card/card'

const createMainPage = (arrSection) => {
  const mainPage = document.createElement('div')
  mainPage.classList.add('main-page')
  const allCategories = []
  arrSection.map((item, index) => {
    if (arrSection[index]) {
      allCategories.push(arrSection[index])
    }

    return true
  })

  allCategories.map((category) => {
    mainPage.appendChild(createCard([category, category], true))

    return true
  })

  return mainPage
}
export default createMainPage