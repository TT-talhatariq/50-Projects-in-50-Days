const area = document.getElementById('area')
const tags = document.getElementById('tags')

area.focus()

area.addEventListener(
  'keyup',
  (e) => {
    createTages(e.target.value)
    if (e.key === 'Enter') {
      setTimeout(() => {
        e.target.value = ''
      })
      randomSelect()
    }
  },
  10
)

function createTages(input) {
  const tagsI = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())
  tags.innerHTML = ''

  tagsI.forEach((element) => {
    const tagN = document.createElement('span')

    tagN.classList.add('tag')
    tagN.innerText = element
    tags.appendChild(tagN)
  })
}

function randomSelect() {
  const times = 30
  const interval = setInterval(() => {
    const randomT = pickRandomTag()
    highlight(randomT)

    setTimeout(() => {
      removeHighlight(randomT)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randT = pickRandomTag()
      highlight(randT)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag) {
  tag.classList.add('active')
}

function removeHighlight(tag) {
  tag.classList.remove('active')
}
