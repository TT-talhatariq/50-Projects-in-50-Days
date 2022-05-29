const container = document.querySelector(".container")

container.addEventListener("click", function (e) {
  const target = e.target
  if (target.classList.contains("panel")) {
    removeAll()
    e.target.classList.add("active")
  }
})

const removeAll = function () {
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.remove("active")
  })
}
