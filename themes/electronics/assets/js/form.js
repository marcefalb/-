const formInput = document.querySelectorAll('.form__item input')
formInput.forEach(input => {
  input.addEventListener('focus', () => input.nextElementSibling.style.width = "100%")
  input.addEventListener('focusout', () => input.value ? '' : input.nextElementSibling.style.width = "0")
})