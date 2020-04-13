const selectedSection = (event) => {
  console.log(`Выбран раздел: ${event.target.innerText}`)
  const allTd = Array.from(document.getElementsByClassName('td'))
  allTd.map((td) => td.classList.remove('td'))
  event.target.classList.add('td')
  const menuBtn = document.getElementsByClassName('menu openMenu')
  const sections = Array.from(document.getElementsByClassName('section'))
  document.getElementsByClassName('main-page')[0].classList.add('hidden')
  menuBtn[0].classList.remove('openMenu')
  sections.map((section) => section.classList.add('hidden'))
  document.getElementsByClassName(event.target.innerText.replace(/\s/igu, '-'))[0].classList.remove('hidden')
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