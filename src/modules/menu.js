export class Menu {
  static createMenu() {
    const menu = document.createElement('div')
    const list = document.createElement('ul')
    list.classList.add('menu-items')
    menu.classList.add('menu')
    const listItems = ['Main Page', 'Action (Set A)', 'Action (Set B)', 'Action (Set C)', 'Animal (Set A)',
      'Animal (Set B)', 'Adjective', 'Clothes', 'Emotions']
      listItems.map((item) => {
        const link = document.createElement('li')
        const a = document.createElement('a')
        a.addEventListener('click', () => {Menu.selectedSection()})
        link.classList.add('item')
        const textLink = document.createTextNode(`${item}`)
        a.appendChild(textLink)
        link.appendChild(a)
        list.appendChild(link)
      })
    menu.appendChild(list)
    return menu
  }

  static selectedSection() {
    console.log(`Выбран раздел: ${event.target.innerText}`)
    const allTd = Array.from(document.getElementsByClassName('td'))
    allTd.map((td) => td.classList.remove('td'))
    event.target.classList.add('td')
    const menuBtn = document.getElementsByClassName('menu openMenu')
    const sections = Array.from(document.getElementsByClassName('section'))
    menuBtn[0].classList.remove('openMenu')
    sections.map((section) => section.classList.add('hidden'))
    document.getElementsByClassName(event.target.innerText.replace(/\s/ig, '-'))[0].classList.remove('hidden')
  }
}