import { Container } from './modules/container'
import { Header } from './modules/header'
import { Menu } from './modules/menu'

document.body.appendChild(Container.createContainer())
const container = document.getElementsByClassName('container')[0]
container.appendChild(Header.createHeader())
container.append(Menu.createMenu())
