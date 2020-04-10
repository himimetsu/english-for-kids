const toggleMenu = () => {
  const menu = document.getElementsByClassName('menu')[0]
  menu.classList.remove('openMenu')
}

const createInput = () => {
  const input = document.createElement('input')
  input.classList.add('onoffswitch-checkbox')
  input.setAttribute('id', 'myonoffswitch')
  input.setAttribute('type', 'checkbox')
  input.setAttribute('name', 'onoffswitch')
  input.setAttribute('checked', 'true')

  return input
}

const createLabel = () => {
  const firstSpan = document.createElement('span')
  firstSpan.classList.add('onoffswitch-inner')
  const secondSpan = document.createElement('span')
  secondSpan.classList.add('onoffswitch-switch')
  const label = document.createElement('label')
  label.classList.add('onoffswitch-label')
  label.setAttribute('for', 'myonoffswitch')
  label.appendChild(firstSpan)
  label.appendChild(secondSpan)

  return label
}

const createBtn = () => {
  const modeSwitch = document.createElement('div')
  modeSwitch.classList.add('onoffswitch')
  modeSwitch.appendChild(createInput())
  modeSwitch.appendChild(createLabel())
  modeSwitch.addEventListener('click', () => { toggleMenu() })

  return modeSwitch
}
export default createBtn