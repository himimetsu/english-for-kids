import { ModeSwitch } from '../UI/switchBtn/modeSwitch'
import { CallMenu } from '../UI/callMenu/callMenu'

export class Header {
  static createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')
    header.appendChild(CallMenu.createCallMenu())
    header.appendChild(ModeSwitch.createBtn())
    return header
  }
}