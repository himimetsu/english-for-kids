import createCallMenu from '../UI/callMenu/callMenu'
import createSwitch from '../UI/switchBtn/modeSwitch'

const createHeader = () => {
  const header = document.createElement('div')
  header.classList.add('header')
  header.appendChild(createCallMenu())
  header.appendChild(createSwitch())

  return header
}
export default createHeader