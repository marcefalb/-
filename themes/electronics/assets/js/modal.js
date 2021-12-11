const modal = document.querySelector('.modal')
const btnBuy = document.querySelector('.payment__btn')

const showModal = () => {
  modal.style.display = 'flex'
  setTimeout((() => closeModal()), 3000)
  setTimeout((() => window.location.href = '/'), 4000)
}
const closeModal = () => {
  modal.style.display = 'none'
}

btnBuy.addEventListener('click', () => {
  showModal()
})