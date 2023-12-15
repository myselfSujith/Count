
let countdown;// setInterval function for countdown clock
let serviceInSession;// seTimeout function for when event is Live
const clock = document.getElementById('clock');// div that controls the clock container 
const livestreamButton = document.getElementById('door');// div that controls the button for the user to click to enter the live stream
const daysUnit = document.querySelector('.days');// span element that displays the amount of days
const hoursUnit = document.querySelector('.hours');// span element that displays the amount of hours
const minutesUnit = document.querySelector('.minutes');// span element that displays the amount of minutes
const secondsUnit = document.querySelector('.seconds');// span element that displays the amount of seconds

const startDate = new Date(2023, 0, 4, 00, 00, 00).getTime();// initial date and time the countdown clock started from (Year, Month, Day, Hours, Minutes, Seconds,)
startDate > Date.now() ? timer(startDate) : calculateFutureDate(startDate);// conditional statement that decides if the timer function should start with the start date or calculate another date
// timer function takes in a date parameter in milliseconds
function timer(date){
	// countdown holds the entire timer functionality 
	countdown = setInterval(()=>{
		const now = Date.now();// current date and time
		const differenceInTime = date - now;// distance between current time and future time of event
		// checks timer to see if the distance is zero and if zero
		if(differenceInTime < 0){
			clearInterval(countdown);// clear timer
			clock.classList.add("hide");// hide the clock div element
			livestreamButton.classList.remove("hide");// show the live stream button div element
			// keeps the live stream button div element on the screen for 2 hours or 7200000 milliseconds and then
			serviceInSession = setTimeout(()=>{
				livestreamButton.classList.add("hide");// hide live stream button div element
				calculateFutureDate(date);// past the date that countdown was counting down to, to the calculateFutureDate function
				clock.classList.remove("hide");// show the clock again
			},7200000); // after 2 hours do what's inside the setTimeout function
			return;
		}	
		timeLeft(differenceInTime);// each iteration of setInterval send updated distance to timeLeft function
	}, 1000);// every 1 second
}
// timeLeft function takes a time as a parameter in milliseconds and displays it in Days, Hours, Minutes, and Seconds
function timeLeft(time){
		const days = Math.floor(time /(1000 * 60 * 60 * 24));// milliseconds into days
		const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));// milliseconds into hours
		const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));// milliseconds into minutes
		const seconds = Math.floor((time % (1000 * 60)) / 1000);// milliseconds into seconds
		// conditional added to each portion of the time that will be displayed adds a zero to the front of numbers < 10
		const displayDays = `${days < 10 ? '0' : '' }${days}`;// days string that will be displayed 
		const displayHours = `${hours < 10 ? '0' : ''}${hours}`;// hours string that will be displayed
		const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;// minutes string that will be displayed
		const displaySeconds = `${seconds < 10 ? '0' : ''}${seconds}`;// seconds string that will be displayed
		//displays the time strings on the page individually
		daysUnit.textContent = displayDays;
		hoursUnit.textContent = displayHours;
		minutesUnit.textContent = displayMinutes;
		secondsUnit.textContent = displaySeconds;
		// next line is for testing purposes
		// console.log(displayDays+" : " +displayHours+" : "+displayMinutes+" : "+displaySeconds);
}
// calculateFutureDate takes a number in milliseconds as a parameter 
function calculateFutureDate (dateTochange){	
		const newDate = new Date(dateTochange);// converts it to date format
		const weeklyDate  = newDate.setDate(newDate.getDate() +07);// adds 7 days to that date
		timer(weeklyDate);// sends it to the timer function
		//console.log("new: "+dateTochange);		
}

// Helper function to add a leading zero to numbers less than 10
function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❅';
  
 // Random position of snowflake horizontally and random opacity
snowflake.style.left = `${Math.random() * 100}%`;
snowflake.style.opacity = `${0.4 + Math.random() * 0.6}`;

// Adding the snowflake to the container
document.body.appendChild(snowflake);

// Setting random falling duration and animation delay
const duration = `${5 + Math.random() * 10}s`;
const delay = `${Math.random() * 5}s`;
snowflake.style.animationDuration = duration;
snowflake.style.animationDelay = delay;

// Removing the snowflake after it falls
setTimeout(() => {
  snowflake.remove();
}, parseFloat(duration) * 1000 + parseFloat(delay) * 1000); // Convert to milliseconds
}

// Function to start creating snowflakes every 50 milliseconds
function startSnowing() {
  setInterval(createSnowflake, 50);
}

// Start snowfall when the page is loaded
document.addEventListener('DOMContentLoaded', startSnowing);

// Array of strings to be "typed"
const codePhrases = [
    
    "SELECT Ashhhh# FROM World WHERE Person = 'Veryyy Worstttt' AND Mood = 'Irritated';",
    "console.log('Small Advance Wishes for your Birthday. Don't expect more this website. It's just a wishes...!');",
    "UPDATE `AGE` SET `one more happy year` = '100%' WHERE `Name` = 'Ashmiiii';",
    "Removing Misunderstandings...",
    "Appending Memories...",
    "Uploading inProgress.... "
];
// Element where the code will be displayed
const codeElement = document.getElementById('code');

// Function to simulate typing text
function typePhrases(phrases, index = 0) {
  let phraseIndex = index;
  let charIndex = 0;
  let intervalId;
  const typingSound = document.getElementById('typing-sound'); // Get the audio element

  function typeNextChar() {
    if (charIndex < phrases[phraseIndex].length) {
      if (charIndex === 0) {
        typingSound.play(); // Start playing the sound
      }
      codeElement.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
    } else {
      typingSound.pause(); // Stop playing the sound
      typingSound.currentTime = 0; // Reset the sound time to the beginning
      clearInterval(intervalId);
      setTimeout(() => {
        codeElement.textContent = '';
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        intervalId = setInterval(typeNextChar, 100); // Typing speed
      }, 2000); // Pause before starting the next phrase
    }
  }

  intervalId = setInterval(typeNextChar, 100); // Typing speed
}

document.addEventListener('DOMContentLoaded', () => typePhrases(codePhrases));


// liveStream function changes the webpage to the webpage where the live stream is hosted
function liveStream (){
	window.location.assign("https://sujithreddychevvu.github.io/Ashmii/");
}