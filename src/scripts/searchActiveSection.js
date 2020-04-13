const searchSection = () => {
  const allSections = Array.from(document.getElementsByClassName('sections')[0].children)
  let activeSection = ''
  allSections.map((section, index) => {
    if (!Array.from(section.classList).includes('hidden')) {
      activeSection = String(allSections[index].classList[1])
    }

    return true
  })

  return activeSection
}
export default searchSection