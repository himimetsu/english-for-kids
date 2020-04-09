import { Container } from './modules/container'
import { Header } from './modules/header'
import { Menu } from './modules/menu'
import { MainContent } from './modules/main-content'
import { MainPage } from './modules/main-page'

document.body.appendChild(Container.createContainer())
const container = document.getElementsByClassName('container')[0]
container.append(Menu.createMenu())
container.appendChild(Header.createHeader())
container.appendChild(MainContent.createContent())
container.appendChild(MainPage.createMainPage())