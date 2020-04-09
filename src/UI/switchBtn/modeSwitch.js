export class ModeSwitch {
  static createBtn() {
    const modeSwitch = document.createElement('div')
    modeSwitch.classList.add('onoffswitch')
    const input = document.createElement('input')
    input.classList.add('onoffswitch-checkbox')
    input.setAttribute('id', 'myonoffswitch')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('name', 'onoffswitch')
    input.setAttribute('checked', 'true')
    modeSwitch.appendChild(input)
    const label = document.createElement('label')
    label.classList.add('onoffswitch-label')
    label.setAttribute('for', 'myonoffswitch')
    const firstSpan = document.createElement('span')
    firstSpan.classList.add('onoffswitch-inner')
    const secondSpan = document.createElement('span')
    secondSpan.classList.add('onoffswitch-switch')
    label.appendChild(firstSpan)
    label.appendChild(secondSpan)
    modeSwitch.appendChild(label)
    modeSwitch.addEventListener('click', () => {ModeSwitch.toggleMenu()})
    return modeSwitch
  }

  static toggleMenu() {
    const menu = document.getElementsByClassName('menu')[0]
    menu.classList.remove('openMenu')
  }
}