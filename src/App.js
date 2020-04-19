import cards from './DATA/cards'
import createContainer from './modules/container'
import createHeader from './modules/header'
import createLocalStore from './scripts/LocalStore'
import createMainContent from './modules/main-content'
import createMainPage from './modules/main-page'
import createMenu from './modules/menu'
import createStatistics from './modules/statistics'
import modal from './modules/modal'

document.body.appendChild(createContainer())
const container = document.getElementsByClassName('container')[0]
const frag = document.createDocumentFragment()
frag.append(createMenu(cards[0][0]))
frag.appendChild(createHeader())
frag.appendChild(createMainContent(cards[0][1], cards[1]))
frag.appendChild(createMainPage(cards[0][1]))
frag.appendChild(modal())
createLocalStore()
frag.appendChild(createStatistics())
container.appendChild(frag)