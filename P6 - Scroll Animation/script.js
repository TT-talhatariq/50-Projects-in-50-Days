'use strict'

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
  const triger = (window.innerHeight / 5) * 4

  boxes.forEach((mov) => {
    const top = mov.getBoundingClientRect().top

    if (top < triger) mov.classList.add('show')
    else mov.classList.remove('show')
  })
}
