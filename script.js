// hamburger
// const hamburger = document.querySelector(".hamburger--collapse");
// hamburger.addEventListener("click", () => {
// 	hamburger.classList.toggle("is-active");
// });

// carasoul
document.addEventListener("DOMContentLoaded", () => {
	const testimonails = document.getElementsByClassName("testimonials__content");
	const itemsLength = testimonails.length;
	let slide = 0;

	testimonails[0].classList.add("active");
	testimonails[1].classList.add("next");
	testimonails[2].classList.add("prev");
});

document.querySelector(".fa-angle-right").addEventListener("click", () => {
	if (slide === itemsLength - 1) {
		slide = 0;
	} else {
		slide++;
	}

	testimonails[slide].classList.add("active");
});
