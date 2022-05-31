const searchButton = document.querySelector('.btn')
const searchBar = document.querySelector('.search')
const input = document.querySelector('.input')

searchButton.addEventListener('click', function (e) {
  searchBar.classList.toggle('active')
  input.focus()
})
