import getSort from '../scripts/TableSort'

const createTd = (iter) => {
  const frag = document.createDocumentFragment()
  let currentLocal = localStorage.getItem(`statistics${iter}`).split(',')
  for (let jei = 0; jei < 7; jei += 1) {
    let td = document.createElement('td')
    let textTd = currentLocal[jei]
    td.append(textTd)
    frag.append(td)
  }

  return frag
}

const sectionTr = () => {
  const frag = document.createDocumentFragment()
  for (let iter = 0; iter < 64; iter += 1) {
    let tr = document.createElement('tr')
    tr.appendChild(createTd(iter))
    frag.appendChild(tr)
  }

  return frag
}

const createTbody = () => {
  const frag = document.createDocumentFragment()
  const body = document.createElement('tbody')
  body.appendChild(sectionTr())
  frag.appendChild(body)

  return frag
}

const createTh = () => {
  const arrTh = ['Section', 'Word', 'Translate', 'Success', 'Error', 'Train', '% Error']
  const frag = document.createDocumentFragment()
  arrTh.map((name) => {
    const th = document.createElement('th')
    th.classList.add('control')
    th.addEventListener('click', (event) => getSort(event))
    const textTh = document.createTextNode(name)
    th.appendChild(textTh)
    frag.appendChild(th)

    return true
  })

  return frag
}

const createTableHead = () => {
  const table = document.createElement('table')
  table.classList.add('table-sort')
  const thead = document.createElement('thead')
  const tr = document.createElement('tr')
  tr.appendChild(createTh())
  thead.appendChild(tr)
  table.appendChild(thead)
  table.appendChild(createTbody())

  return table
}

const createTable = () => {
  const frag = document.createDocumentFragment()
  const div = document.createElement('div')
  div.classList.add('statistics-table')
  div.appendChild(createTableHead())
  frag.appendChild(div)

  return frag
}
export default createTable