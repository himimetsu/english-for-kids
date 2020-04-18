import createStatisticsBtn from '../StatisticsBtn/StatisticsBtn'
import createTable from '../../modules/statistics-table'

export const renderStatistics = () => {
  const statisticks = document.getElementsByClassName('statistics')[0]
  if (document.getElementsByClassName('statistics-table').length > 0) {
    const arrStatChild = Array.from(statisticks.children)
    arrStatChild.map((stat) => stat.remove())
    statisticks.appendChild(createTable())
    statisticks.appendChild(createStatisticsBtn())
  } else {
    statisticks.appendChild(createTable())
    statisticks.appendChild(createStatisticsBtn())
  }
}

const openStat = () => {
  const div = document.createElement('div')
  div.classList.add('open-stat-btn')
  div.addEventListener('click', () => renderStatistics())
  const btn = document.createElement('button')
  const textBtn = document.createTextNode('STATISTICS')
  btn.appendChild(textBtn)
  div.appendChild(btn)

  return div
}
export default openStat