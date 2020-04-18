import createLocalStore from '../../scripts/LocalStore'
import { renderStatistics } from '../OpenStatBtn/OpenStatBtn'

const resetStatistics = () => {
  localStorage.clear()
  createLocalStore()
  renderStatistics()
}

const reset = () => {
  const div = document.createElement('div')
  div.addEventListener('click', () => resetStatistics())
  div.classList.add('shell-reset-btn')
  const btn = document.createElement('button')
  const btnText = document.createTextNode('Reset')
  btn.appendChild(btnText)
  div.appendChild(btn)

  return div
}

const repeat = () => {
  const div = document.createElement('div')
  div.classList.add('shell-repeat-btn')
  const btn = document.createElement('button')
  const btnText = document.createTextNode('Repeat words')
  btn.appendChild(btnText)
  div.appendChild(btn)

  return div
}

const createStatisticsBtn = () => {
  const div = document.createElement('div')
  div.classList.add('statistics-btn')
  div.appendChild(reset())
  div.appendChild(repeat())

  return div
}
export default createStatisticsBtn