const player = (currentSection, currentCard) => {
  const audio = new Audio(`./audio/${currentSection}/${currentCard}.mp3`)
  audio.play()
}
export default player