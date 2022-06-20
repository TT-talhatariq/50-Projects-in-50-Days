//All variables
const cups = document.querySelectorAll('.cup-small')
const remained = document.querySelector('.remained')
const liters = document.querySelector('.liter')
const percentage = document.querySelector('.percentage')

updateCup()
const clickCup = function (index) {
  if (
    cups[index].classList.contains('full') &&
    !cups[index].nextElementSibling.classList.contains('full')
  )
    index--
  cups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add('full')
    } else cup.classList.remove('full')
  })
  updateCup()
}

function updateCup() {
  const fullCups = document.querySelectorAll('.full').length
  const totalLength = cups.length
  console.log(fullCups)
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalLength) * 330}px`
    percentage.textContent = `${(fullCups / totalLength) * 100}%`

    console.log(liters)
    if (fullCups === totalLength) {
      console.log('Completed')
      remained.style.visibility = 'hidden'
      remained.style.height = 0
      percentage.style.height = '100vh'
    } else {
      remained.style.visibility = 'visible'
      liters.textContent = `${((totalLength - fullCups) * 250) / 1000}L`
    }
  }
}
cups.forEach((cup, index) => {
  cup.addEventListener('click', () => clickCup(index))
})
