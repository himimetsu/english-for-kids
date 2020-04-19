import off from '../scripts/OffMode'

const hideOtherBlocks = () => {
  const allTd = Array.from(document.getElementsByClassName('td'))
  allTd.map((td) => td.classList.remove('td'))
  const sections = Array.from(document.getElementsByClassName('section'))
  sections.map((section) => section.classList.add('hidden'))
}

const selectedSection = (event) => {
  hideOtherBlocks()
  event.target.classList.add('td')
  const menuBtn = document.getElementsByClassName('menu openMenu')
  document.getElementsByClassName('main-page')[0].classList.add('hidden')
  document.getElementsByClassName('statistics')[0].classList.add('hidden')
  menuBtn[0].classList.remove('openMenu')
  document.getElementsByClassName(event.target.innerText.replace(/\s/igu, '-'))[0].classList.remove('hidden')
  off(false)
}

const createMenu = (array) => {
  const menu = document.createElement('div')
  const list = document.createElement('ul')
  list.classList.add('menu-items')
  menu.classList.add('menu')
    array.map((item) => {
      const listItem = document.createElement('li')
      const link = document.createElement('a')
      link.addEventListener('click', (event) => selectedSection(event))
      listItem.classList.add('item')
      const textlistItem = document.createTextNode(`${item}`)
      link.appendChild(textlistItem)
      listItem.appendChild(link)
      list.appendChild(listItem)

      return true
    })
  menu.appendChild(list)

  return menu
}
export default createMenu