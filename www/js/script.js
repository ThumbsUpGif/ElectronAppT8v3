     // Event listener based on Materialize css .hide class

	 let hideInput = document.getElementById('input-hide');
	 // console.log(hideInput);
	 let hideCountdown = document.getElementById('countdown-hide');
	 // console.log(hideCountdown);
	 let button = document.querySelector("button");
	 // console.log(button);


	 // Create a button that enters the user's information into local storage and then hides the input field after use

	 button.addEventListener('click', () => {
		 if (hideInput.classList.contains("hide")) {
			 hideInput.classList.remove("hide");
			 hideCountdown.setAttribute("class", "hide")

		 } else {
			 hideInput.setAttribute("class", "hide");
			 hideCountdown.classList.remove("hide");
		 }

		 let userDate = new Date(document.getElementById('special-date').value);
		 let userOccasion = document.getElementById('user-occasion').value;

		 localStorage.setItem('storedDate', userDate);
		 localStorage.setItem('storedOccasion', userOccasion);
		 console.log(userOccasion)

	 });


	 // Button that will erase local storage and start again with a new input window
	 let refreshButton = document.getElementById('eraseStorage');
	 // console.log(refreshButton)

	 refreshButton.addEventListener('click', () => {
		 localStorage.clear();
		 // console.log('click')
	 })


	 // testing if the local storage works
	 let storageChecker = localStorage.getItem('storedDate');
	 console.log(storageChecker)

	 // If there already is information in the localStorage, go straight to the countdown timer
	 if (storageChecker == null) {
		 hideInput.classList.remove("hide");
		 hideCountdown.setAttribute("class", "hide")
	 } else {
		 hideInput.setAttribute("class", "hide");
		 hideCountdown.classList.remove("hide");
	 }


	 // Introduce the Materialize date form
	 const Calender = document.querySelector('.datepicker');
	 M.Datepicker.init(Calender, {
		 format: 'yyyy-mm-dd',
		 firstDay: 1,
		 // minDate: '2021 05 01', // I could't get this to work...

	 })

	 // Create a countdown timer and display the user's text

	 function load() {

		 // establish reference point
		 let currentTime = new Date();
		 console.log(currentTime);


		 // collect the stored data and convert to date format
		 var locallyStoredDate = new Date(localStorage.getItem('storedDate'));
		 // console.log(localStorageDate)


		 //calculate difference between future date and current moment
		 let waitingTime = locallyStoredDate - currentTime;
		 console.log(waitingTime)


		 // make the calculation from local storage (rather than input)
		 const d = Math.floor(waitingTime / 1000 / 60 / 60 / 24);
		 const h = Math.floor(waitingTime / 1000 / 60 / 60) % 24;
		 const m = Math.floor(waitingTime / 1000 / 60) % 60;
		 const s = Math.floor(waitingTime / 1000) % 60;


		 // pass values back into HTML document
		 document.getElementById('days').innerHTML = d;
		 document.getElementById('hours').innerHTML = h;
		 document.getElementById('minutes').innerHTML = m;
		 document.getElementById('seconds').innerHTML = s;

		 // make minutes and seconds always display as two digits
		 // console.log(s < 10 ? ‘0’ + s : s;) <-- I could't get this to work...


		 // retrieve user's occasion string from local storage and enter into document
		 var locallyStoredOccasion = localStorage.getItem('storedOccasion');
		 console.log(locallyStoredOccasion)

		 document.getElementById('userOccasionOutput').innerHTML = locallyStoredOccasion;

	 }
	 setInterval(load, 10);
