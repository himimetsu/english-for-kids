const modal = () => {
  const div = document.createElement('div')
  div.classList.add('modal-window')
  div.classList.add('hidden')
  const window = document.createElement('div')
  window.classList.add('window')
  div.appendChild(window)

  return div
}
export default modal