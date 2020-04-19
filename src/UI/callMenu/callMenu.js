const lineBtn = () => {
  const frag = document.createDocumentFragment()
  for (let iter = 0; iter < 3; iter += 1) {
    const span = document.createElement('span')
    frag.appendChild(span)
  }

  return frag
}

const createCallMenu = () => {
  const callMenu = document.createElement('div')
  callMenu.appendChild(lineBtn())
  callMenu.classList.add('btn-call-menu')
  callMenu.addEventListener('click', () => {
    const tempMenu = document.getElementsByClassName('btn-call-menu')[0]
    tempMenu.classList.toggle('open')
    const menu = document.getElementsByClassName('menu')[0]
    menu.classList.toggle('openMenu')
    const header = document.getElementsByClassName('header')[0]
    const menuItems = document.getElementsByClassName('menu-items')[0]
    menuItems.setAttribute('style', `margin-top: ${header.clientHeight + header.offsetTop + 30}px`)
  })

  return callMenu
}
export default createCallMenu