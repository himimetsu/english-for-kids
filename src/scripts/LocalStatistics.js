const percent = (currentStat) => (100 / (currentStat[3] / 1 + currentStat[4] / 1)) * currentStat[4]

const stat = (section, eng, arr) => {
  const currentStat = localStorage.getItem(eng).split(',')
  if (arr[0] === 'game') {
    if (arr[1] === 'right') {
      currentStat[3] = currentStat[3] / 1 + 1
      currentStat[6] = percent(currentStat).toFixed()
    } else if (arr[1] === 'wrong') {
      currentStat[4] = currentStat[4] / 1 + 1
      currentStat[6] = percent(currentStat).toFixed()
    }
  } else if (arr[0] === 'train') {
    currentStat[5] = currentStat[5] / 1 + 1
  }
  localStorage.setItem(eng, currentStat)
}
export default stat