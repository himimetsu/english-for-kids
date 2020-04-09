export class Menu {
  static createMenu() {
    const menu = document.createElement('div')
    const list = document.createElement('ul')
    list.classList.add('menu-items')
    menu.classList.add('menu')
    const listItems = ['Main Page', 'Action (Set A)', 'Action (Set B)', 'Action (Set C)', 'Animal (Set A)',
      'Animal (Set B)', 'Adjective', 'Clothes']
      listItems.map((item) => {
        const link = document.createElement('li')
        const a = document.createElement('a')
        link.classList.add('item')
        const textLink = document.createTextNode(`${item}`)
        a.appendChild(textLink)
        link.appendChild(a)
        list.appendChild(link)
      })
    menu.appendChild(list)
    return menu
  }
}