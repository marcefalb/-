const select = document.querySelector('[name="sort"]')

select.addEventListener('change', (event) => {
	const selectValue = select.value
	const href = window.location.href
	
	const urlSearchParams = new URLSearchParams(window.location.search);
	urlSearchParams.set("sort", selectValue)
	window.location.search = urlSearchParams.toString()
})