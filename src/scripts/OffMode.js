import refreshGameBtn from './RefreshGameBtn'

const clearFieldStars = () => {
  document.getElementsByClassName('btn-call-menu')[0].classList.remove('open')
  const stars = Array.from(document.getElementsByClassName('field-stars')[0].children)
  stars.map((star) => star.remove())
}

const off = (key) => {
  clearFieldStars()
  const allNonClick = Array.from(document.getElementsByClassName('non-click'))
  allNonClick.map((non) => non.classList.remove('non-click'))
  const allUsed = Array.from(document.getElementsByClassName('used'))
  allUsed.map((used) => used.classList.add('hidden'))
  const allBtn = Array.from(document.getElementsByClassName('game-button'))
  allBtn.map((btn) => btn.classList.remove('repeat'))
  refreshGameBtn()
  if (key) {
    document.getElementsByClassName('main-content')[0].classList.toggle('play')
  }
}
export default off