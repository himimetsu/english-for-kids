import cards from './DATA/cards'
import createContainer from './modules/container'
import createHeader from './modules/header'
import createMainContent from './modules/main-content'
import createMainPage from './modules/main-page'
import createMenu from './modules/menu'
import modal from './modules/Modal'

document.body.appendChild(createContainer())
const container = document.getElementsByClassName('container')[0]
container.append(createMenu(cards[0][0]))
container.appendChild(createHeader())
container.appendChild(createMainContent(cards[0][1], cards[1]))
container.appendChild(createMainPage(cards[0][1]))
container.appendChild(modal())