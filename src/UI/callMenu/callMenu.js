export class CallMenu {
  static createCallMenu() {
    const callMenu = document.createElement('div')
    callMenu.classList.add('btn-call-menu')
    callMenu.addEventListener('click', () => {CallMenu.toggleMenu()})
    return callMenu
  }

  static toggleMenu () {
    const callMenu = document.getElementsByClassName('btn-call-menu')[0]
    callMenu.classList.toggle('active')
    const menu = document.getElementsByClassName('menu')[0]
    menu.classList.toggle('openMenu')
    const header = document.getElementsByClassName('header')[0]
    const menuItems = document.getElementsByClassName('menu-items')[0]
    menuItems.setAttribute('style', `margin-top: ${header.clientHeight + header.offsetTop + 10}px`)
  }
}