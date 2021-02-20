// https://api.github.com/users/sirhmd0/repos

const btn = document.querySelector('.nav-btn')
const nav = document.querySelector('nav')

btn.addEventListener('click', () => {
	nav.classList.toggle('nav-toggle')
})

const work = document.querySelectorAll('.work-desc')
const img = document.querySelectorAll('.work')

function removeActiveClass() {
	work.forEach(w => w.classList.remove('active'))
}

img.forEach((e, i) => e.addEventListener('click', () => {
	removeActiveClass()
	work[i].classList.add('active')
}))