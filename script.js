// hamburger
// const hamburger = document.querySelector(".hamburger--collapse");
// hamburger.addEventListener("click", () => {
// 	hamburger.classList.toggle("is-active");
// });

// carasoul

(function () {
	// let testimonials = [
	// 	{
	// 		testimonial:
	// 			"Had an absolute blast! Great streatch of river with lots of exciting rapids. Close to Denver. The entire staff was so friendly and helpful in creating a memoriable expierience! Our guide Mattie was a real pro who was able to deal with our group of inexperienced paddlers for a safe and fun ride. I highly recommend!",
	// 		author: "Grant A",
	// 	},
	// 	{
	// 		testimonial:
	// 			"Great summer attaraction close to Denver! Our guide coleman made sure we knew what to do through each of the rapids and kept us from getting too hot on a warm Spring day. The new SKy Trek course looks like tons of fun and I'll definitely be back to try that out as well!",
	// 		author: "Sarah C",
	// 	},
	// 	{
	// 		testimonial:
	// 			"Very professional outfitter. Had an excellent experience. Our guid Willie was knowledgeable & made the trip frun for everyone, including our 3 teenage boys. Would reccomend them for anyone looking for whitewater rafging in the area. ",
	// 		author: "Schilling5",
	// 	},
	// ];

	const slider = document.querySelector(".testimonials__slider");
	const leftArrow = document.querySelector(".left");
	const rightArrow = document.querySelector(".right");

	let sectionIndex = 0;

	rightArrow.addEventListener("click", () => {
		sectionIndex = sectionIndex > 2 ? (sectionIndex = 0) : (sectionIndex += 1);
		slider.style.transform = "translate(" + sectionIndex * "-25" + "%";
	});

	leftArrow.addEventListener("click", () => {
		sectionIndex = sectionIndex > 0 ? (sectionIndex -= 1) : (sectionIndex = 3);
		slider.style.transform = "translate(" + sectionIndex * "-25" + "%";
	});

	// const testimonailContainer = document.getElementById("testimonials__content");

	// //set initial testimonial

	// document.addEventListener("DOMContentLoaded", () => {
	// 	const para = document.createElement("p");
	// 	para.className = "testimonials__para";
	// 	para.innerHTML = testimonials[0].testimonial;
	// 	// const author = document.createElement("span");
	// 	// author.className = "testimonials__author ";
	// 	// author.innerHTML = testimonials[0].author;
	// 	testimonailContainer.appendChild(para);
	// });
})();
