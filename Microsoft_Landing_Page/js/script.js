const burgerBtn = document.querySelector('.burger-btn');
const navInnerLeft = document.querySelector('.nav-inner-left');
const navInnerLeftLinks = document.querySelectorAll('.nav-inner-left a');

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active')
	navInnerLeft.classList.toggle('active')
})

navInnerLeftLinks.forEach(link => { link.addEventListener('click', () => {
		burgerBtn.classList.toggle("active");
		navInnerLeft.classList.toggle("active");
	})
})