// For loader and aos animation
// <!-- For loader and aos animation -->
window.addEventListener("load", function () {
	let loader = document.getElementById("loader");
	let start = performance.now();
	let minDuration = 50; // Minimum duration in milliseconds

	function hideLoader() {
		let end = performance.now();
		let duration = end - start;
		let remainingTime = Math.max(minDuration - duration, 0);

		setTimeout(function () {
			loader.style.opacity = "0";
			setTimeout(function () {
				loader.style.display = "none";
				// Initialize AOS after the loader animation is completed
				AOS.init({
					duration: 800,
				});
			}, 50);
		}, remainingTime);
	}

	if (document.readyState === "complete") {
		hideLoader();
	} else {
		window.addEventListener("DOMContentLoaded", hideLoader);
	}
});
