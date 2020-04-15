const clear = () => {
  const allHappy = Array.from(document.getElementsByClassName('happy'))
  const allSad = Array.from(document.getElementsByClassName('sad'))
  allHappy.map((happy) => happy.remove())
  allSad.map((sad) => sad.remove())
}
export default clear