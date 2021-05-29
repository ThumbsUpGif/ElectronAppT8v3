let startButtonElm = document.querySelector(".start-button");
let unitElm = document.querySelector(".unit");
let timeElm = document.querySelector(".time");

let minutes = 25;
let seconds = 0;

startButtonElm.addEventListener("click", startCountdown);

function startCountdown() {
	// hide UI
	startButtonElm.classList.add("hidden");
	unitElm.classList.add("hidden");

	// show duration
	showTime();

	// start countdown interval
	function countDown() {
		seconds -= 1;

		if (seconds < 0) {
			seconds = 59;
			minutes -= 1;
		}

		showTime();

		if (minutes < 0) {
			window.clearInterval(intervalId);
			resetPomodoro();
		}
	}
	let intervalId = window.setInterval(countDown, 1000);
}

function showTime() {
	// convert seconds to padded string
	let sec = seconds;
	if (sec < 10) {
		sec = "0" + seconds;
	}
	timeElm.textContent = minutes + ":" + sec;
}

function resetPomodoro() {
	// reset clock
	minutes = 25;
	seconds = 0;

	// show UI
	startButtonElm.classList.remove("hidden");
	unitElm.classList.remove("hidden");

	timeElm.textContent = "25";
}
