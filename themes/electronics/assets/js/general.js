const headerDropdownBtn = document.querySelector('.info-dropdown__btn')
const headerDropdownList = document.querySelector('.info-dropdown__list')
showDropdown(headerDropdownBtn, headerDropdownList, 'info-dropdown__list_active', '.info-dropdown')

function setHrWidth() {
  const headerDropdownItems = document.querySelectorAll('.info-dropdown__item')
  headerDropdownItems.forEach(item => {

    item.addEventListener('mouseover', () => {
      if (item.previousElementSibling)
        item.previousElementSibling.style.width = '100%'
      if (item.nextElementSibling)
        item.nextElementSibling.style.width = '100%'
    })

    item.addEventListener('mouseout', () => {
      if (item.previousElementSibling)
        item.previousElementSibling.style.width = '0'
      if (item.nextElementSibling)
        item.nextElementSibling.style.width = '0'
    })

  })
}
setHrWidth()

function showDropdown (btn, list, activeClass, parentBlock) {
  btn.addEventListener('click', () => {

    if (list.classList.contains(activeClass)) {
      list.style.opacity = 0
      setTimeout((() => list.classList.remove(activeClass)), 100)
    }

    else {
      list.classList.add(activeClass)
      setTimeout((() => list.style.opacity = 1), 100)
    }
    
    window.addEventListener('click', event => {
      if (!event.target.closest(parentBlock)) {
        list.style.opacity = 0
        setTimeout((() => list.classList.remove(activeClass)), 100)
      }
    })
  })
}

function openAccordion(acc, activeClass) {
  acc.addEventListener('click', (event) => {
    if (event.target === acc.children[0] || event.target === acc) {
      acc.previousElementSibling ? acc.previousElementSibling.classList.remove(activeClass) : acc.nextElementSibling.classList.add(activeClass)
      acc.classList.contains('payment__accordion-fake') ? acc.classList.toggle(activeClass) : acc.classList.toggle(activeClass)
    }
  })
}

const paymentAcc = document.querySelector('.payment__accordion')
const paymentAccFake = document.querySelector('.payment__accordion-fake')
if (paymentAcc)  {
  openAccordion(paymentAcc, 'payment__accordion-body_active')
  openAccordion(paymentAccFake, 'payment__accordion-body_active')
}

function addDots(element, numLines) {
	element.forEach(el => {
		if (el.clientHeight > el.style.lineHeight * numLines || el.height > el.style.lineHeight * 3) {
			el.style.maxHeight = el.style.lineHeight * numLines
			el.style.overflow = 'hidden'
			el.textContent.substring(0, el.textContent.length - 3)
			el.textContent += '...'
		}
	})
}

const newProduct = document.querySelectorAll('.main-new__item-name')
const hits = document.querySelectorAll('.main-hits__item-name')
const summaries = document.querySelectorAll('.news__item-summary')

if (newProduct) addDots(newProduct, 3)
if (hits) addDots(hits, 2)
// if (summaries) addDots(summaries, 6)

$('#phone').mask('+7 (000) 000-00-00');
$('#number').mask('0000 0000 0000 0000')
$('#date').mask('00 / 00')
$('#secret-code').mask('000')

const filter = document.querySelector('.filter')
const bg = document.querySelector('.navbar-bg')
const sideBar = document.querySelector('.navbar')
if(document.documentElement.clientWidth <= 576)
	sideBar.style.display = 'none'

if (filter)
filter.addEventListener('click', () => {
	if (sideBar.style.display == 'none'){
		sideBar.style.display = 'block'
		bg.classList.add('navbar-bg_active')
		document.body.style.position = 'fixed';
		document.body.style.top = `-${window.scrollY}px`;
	}
	else {
		sideBar.style.display = 'none'
		bg.classList.remove('navbar-bg_active')
		const top = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	}
})

const formSearch = document.querySelectorAll('.form__search')

formSearch.forEach(form => {
	const input = form.querySelector('input')
	
	form.addEventListener('submit', (event) => {
		event.preventDefault()
		
		const urlSearchParams = new URLSearchParams(window.location.search);
		urlSearchParams.set("search", input.value)
		window.location.href = "/spisok-tovarov?" + urlSearchParams.toString()
	})
})

function cocks(btnClass, type, activeClass) {
	$(btnClass).each(function() {
		$(this).on('click', function(event) {
			event.preventDefault()
			const itemAddId = $(this).attr('data-id')
			const currCookies = getCookies(type)
			
			if (checkCookies(currCookies, itemAddId)) {
				removeCookies(currCookies, itemAddId)
				$(this).removeClass(activeClass)
			}
			else {
				currCookies.push(parseInt(itemAddId))
				$(this).addClass(activeClass)
			}
				
			setCookies(type, currCookies)
		})
	})
}

	const finalPrice = document.querySelector('.cart__payment p') ?? ''
$( document ).ready(function() {
	
	const favs = document.querySelectorAll('.to-like') ?? ''
	const cart = document.querySelectorAll('.to-cart') ?? ''
	const favsCookies = getCookies('favs')
	const cartCookies = getCookies('cart')
	
	favs.forEach(fav => {
		if (checkCookies(favsCookies, fav.getAttribute('data-id'))) 
			fav.classList.add('to-like_active')
	})
	cart.forEach(cartItem => {
		if (checkCookies(cartCookies, cartItem.getAttribute('data-id'))) 
			cartItem.classList.add('to-cart_active')
	})
	
	if (finalPrice) finalPrice.innerHTML = renderPrice()
})

function listDel(type) {
	$('.item-del').each(function() {
		$(this).on('click', function(event) {
			event.preventDefault()
			
			const itemAddId = $(this).attr('data-id')
			const currCookies = getCookies(type)
			
			removeCookies(currCookies, itemAddId)
			setCookies(type, currCookies)
			
			$(this).closest('li').remove()
			finalPrice.innerHTML = renderPrice()
		}
	)})
}

function getCookies(type) {
	if (Cookies.get(type))
		return JSON.parse(Cookies.get(type))
	else return new Array()
}

function removeCookies(arr, itemId) {
	arr.forEach(item => {
		if (item === parseInt(itemId)) arr.splice(arr.indexOf(item), 1)
	})
}

function setCookies(type, arr) {
	Cookies.set(type, JSON.stringify(arr))
}

function checkCookies(arr, itemId) {
	hasCoock = false
	arr.forEach(cock => {
		if (parseInt(itemId) === cock) hasCoock = true
	})
	return hasCoock
}

function renderPrice() {
	let prices = document.querySelectorAll('.cart__price')
	prices = Array.from(prices)
	
	let res = prices.reduce((sum, current) => sum += parseInt(current.innerHTML) * parseInt(current.nextElementSibling.querySelector('input').value), 0)
	
	return res + ' Р'
}

$('.payment__btn').on('click', function() {
	Cookies.remove('cart')
})

cocks('.to-like', 'favs', 'to-like_active')
cocks('.to-cart', 'cart', 'to-cart_active')
listDel('favs')
listDel('cart')


