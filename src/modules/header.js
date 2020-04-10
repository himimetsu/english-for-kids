import createBtn from '../UI/switchBtn/modeSwitch'
import createCallMenu from '../UI/callMenu/callMenu'

const createHeader = () => {
  const header = document.createElement('div')
  header.classList.add('header')
  header.appendChild(createCallMenu())
  header.appendChild(createBtn())

  return header
}
export default createHeader