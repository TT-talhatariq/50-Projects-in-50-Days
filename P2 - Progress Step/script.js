const progress = document.querySelector("#progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener("click", function (e) {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

prev.addEventListener("click", function (e) {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

function update() {
  circles.forEach((cir, index) => {
    if (index < currentActive) cir.classList.add("active")
    else cir.classList.remove("active")
  })

  const actives = document.querySelectorAll(".active")
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%"

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === 4) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
