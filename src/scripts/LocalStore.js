import cards from '../DATA/cards'

const createLocalStore = () => {
  let iter = 0
  if (localStorage.key('LocalStatistics') === null) {
    localStorage.setItem('LocalStatistics', '')
    cards[0][1].map((section, index) => {
      cards[1][index].map((item) => {
        localStorage.setItem(`statistics${iter}`, [section, item.word, item.translation, 0, 0, 0, 0])
        iter += 1

        return true
      })

      return true
    })
  }
}
export default createLocalStore