import clear from './ClearWindow'
import off from './OffMode'
import player from './AudioPlayer'
import reset from './GameReset'
import searchSection from './SearchActiveSection'

const sadText = (error) => {
  const frag = document.createDocumentFragment()
  const failSpan = document.createElement('span')
  failSpan.classList.add('fail')
  failSpan.appendChild(document.createTextNode(`Error: ${error}`))
  frag.appendChild(failSpan)

  return frag
}

const sad = (error) => {
  const div = document.createElement('div')
  div.classList.add('sad')
  const img = document.createElement('img')
  img.src = '/images/cards/failure.jpg'
  div.appendChild(img)
  div.appendChild(sadText(error))

  return div
}

const happy = () => {
  const div = document.createElement('div')
  div.classList.add('happy')
  const img = document.createElement('img')
  img.src = '/images/cards/success.jpg'
  div.appendChild(img)
  const span = document.createElement('span')
  span.appendChild(document.createTextNode('Win!'))
  div.appendChild(span)

  return div
}

const showModal = (error, success) => {
  const window = document.getElementsByClassName('window')[0]
  document.getElementsByClassName('modal-window')[0].classList.remove('hidden')
  if (error) {
    player('Game', 'failure')
    window.appendChild(sad(error, success))
  } else {
    player('Game', 'success')
    window.appendChild(happy())
  }
  setTimeout(() => {
    document.getElementsByClassName('modal-window')[0].classList.add('hidden')
    document.getElementsByClassName('main-page')[0].classList.remove('hidden')
    clear()
  }, 4000)
}

const end = (error, success) => {
  off()
  document.getElementsByClassName(searchSection())[0].classList.add('hidden')
  showModal(error, success)
  setTimeout(() => {
    const allUsed = Array.from(document.getElementsByClassName('used'))
    allUsed.map((used) => used.classList.add('hidden'))
    reset()
  }, 500)
}
export default end