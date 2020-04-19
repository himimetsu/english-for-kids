import createCallMenu from '../UI/CallMenu/CallMenu'
import createSwitch from '../UI/SwitchBtn/ModeSwitch'
import openStat from '../UI/OpenStatBtn/OpenStatBtn'

const createHeader = () => {
  const header = document.createElement('div')
  header.classList.add('header')
  header.appendChild(createCallMenu())
  header.appendChild(openStat())
  header.appendChild(createSwitch())

  return header
}
export default createHeader