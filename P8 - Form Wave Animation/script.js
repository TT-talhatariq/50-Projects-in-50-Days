const labels = document.querySelectorAll('.form-control label')
labels.forEach((mov) => {
  mov.innerHTML = mov.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style = "transition-delay:${idx * 40}ms">${letter}</span>`
    )
    .join('')
})
