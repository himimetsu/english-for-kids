const refreshGameBtn = () => {
  const allGameStart = Array.from(document.getElementsByClassName('game-start'))
  const allGameRepeat = Array.from(document.getElementsByClassName('game-repeat'))
  allGameStart.map((item) => item.classList.remove('hidden'))
  allGameRepeat.map((item) => item.classList.add('hidden'))
}
export default refreshGameBtn