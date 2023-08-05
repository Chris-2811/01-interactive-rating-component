const ratings = document.querySelectorAll('.rating')
const submit = document.getElementById('submit')
const modal = document.getElementById('modal')
const container = document.getElementById('container')
const ratingText = document.getElementById('rating-text')
const radioButtons = document.querySelectorAll('input[type=radio]')

console.log(radioButtons)

let selected = false

// Add EventListener
radioButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    radioButtons.forEach((button) => {
      button.removeAttribute('checked')
    })

    console.log(e.target)
    e.target.setAttribute('checked', true)
  })
})

submit.addEventListener('click', (e) => {
  e.preventDefault()

  container.style.display = 'none'
  modal.style.display = 'block'

  const selected = document.querySelector('input[type=radio]:checked')
  console.log(selected)
  ratingText.innerText = `You have selected ${selected.value} out of 5`
})
