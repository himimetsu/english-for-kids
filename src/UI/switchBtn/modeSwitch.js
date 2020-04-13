import hideMenu from '../../scripts/hideMenu'

const setFlag = (event) => {
  if (event.propertyName === 'right') {
    document.getElementsByClassName('main-content')[0].classList.toggle('play')

    const allShellButtons = Array.from(document.getElementsByClassName('shell-button'))
    allShellButtons.map((shellButton) => shellButton.classList.toggle('hidden'))

    const allGamesCards = Array.from(document.getElementsByClassName('sections')[0].getElementsByClassName('card'))
    allGamesCards.map((gameCard) => {
      gameCard.classList.toggle('hide-tooltips')
      gameCard.classList.toggle('block-anima')

      return true
    })
  }
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

const createSwitch = () => {
  const modeSwitch = document.createElement('div')
  modeSwitch.classList.add('onoffswitch')
  modeSwitch.appendChild(createInput())
  modeSwitch.appendChild(createLabel())
  modeSwitch.addEventListener('click', hideMenu)
  modeSwitch.addEventListener('transitionend', setFlag)

  return modeSwitch
}
export default createSwitch