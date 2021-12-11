const paymentHeaders = document.querySelectorAll('.payment__get_header span')
const paymentBodies  = document.querySelectorAll('.payment__get_body-item')
const paymentActiveClass = 'payment__get_active'

console.log(paymentBodies)

paymentHeaders.forEach(paymentHeader => {
  paymentHeader.addEventListener('click', event => {
    switch (event.target.id) {
      case 'self-get':
        classRemove(paymentHeaders, paymentActiveClass)
        classRemove(paymentBodies, paymentActiveClass)
        event.target.classList.add(paymentActiveClass)
        paymentBodies[0].classList.add(paymentActiveClass)
        break
      case 'delivery':
        classRemove(paymentHeaders, paymentActiveClass)
        classRemove(paymentBodies, paymentActiveClass)
        event.target.classList.add(paymentActiveClass)
        paymentBodies[1].classList.add(paymentActiveClass)
        break
    }
  })
})
paymentHeaders[0].classList.add(paymentActiveClass)
paymentBodies[0].classList.add(paymentActiveClass)

function classRemove(array, activeClass) {
  array.forEach(item => item.classList.remove(activeClass))
}