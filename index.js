/*** DARK MODE ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

  // Step 1: Select the theme button
  let themeButton = document.getElementById("theme-button");
  let buttonSymbol = document.getElementById("button-symbol");
  let lightMode = true;

  // Step 2: Write the callback function
  const toggleDarkMode = () => {
      // Write your code here
      // This section will run whenever the button is clicked
      document.body.classList.toggle("dark-mode");
      lightMode = !lightMode;
      if (lightMode) {
        buttonSymbol.src = `./img/light_mode.png`;
      } else {
        buttonSymbol.src = `./img/dark_mode.png`;
      }


  }
  // Step 3: Register a 'click' event listener for the theme button,
  // and tell it to use toggleDarkMode as its callback function
  themeButton.addEventListener("click", toggleDarkMode);


// REDUCING MOTION / REMOVING SCROLLING ANIMATIONS
  // Get reduce motion and containers by ID
  let reduceMotion = document.getElementById("reduce-motion");
  let revealableContainers = document.querySelectorAll(".revealable");
  let isMotionOn = true;

  const stopAnimation = () => {
    if(isMotionOn) {
      console.log("clicked");
      document.body.classList.add("no-motion");
      reduceMotion.textContent = "Enable Motion"
      revealableContainers.forEach(container => {
      container.classList.add("active");
    });
    } else {
      document.body.classList.remove("no-motion");
      reduceMotion.textContent = "Disable Motion";
    }
    isMotionOn = !isMotionOn;
  }

  reduceMotion.addEventListener("click", stopAnimation);


// HAMBURGER MENU FOR Responsive Design
  // Get hamburger button and list items
  let hamburgerMenu = document.getElementById("hamburger-menu");
  let navItems = document.getElementById("navbar-items");
  let hamburgerImg = document.getElementById("hamburger-img");

  //  Show list items
  const showList = () => {
    navItems.classList.toggle("show");
    if(hamburgerImg.src.includes("hamburger.png")) {
      hamburgerImg.src = "./img/close.png";
    } else {
      hamburgerImg.src = "./img/hamburger.png"
    }
  }

  hamburgerMenu.addEventListener("click", showList);

  // Hiding list items after clicking one
  const hideItemsAfterClick = () => {
    if (navItems.classList.contains("show")) {
        navItems.classList.remove("show");
          if(hamburgerImg.src.includes("hamburger.png")) {
            hamburgerImg.src = "./img/close.png";
          } else {
            hamburgerImg.src = "./img/hamburger.png"
          }
          console.log("hide items")
    }

  }

  navItems.addEventListener("click", hideItemsAfterClick);



// HANDLING EXPECTATIONS BUTTON

  // Step 1: grabbing button and expectation-info 
  let expectationButton = document.getElementById("expectations-button");
  let expectationsInfo = document.getElementsByClassName("expectations-info")[0];

  // Step 2: Adding function to enable and disable event expectations
  const showExpectations = () => {
    if (expectationsInfo.style.display == "none" || expectationsInfo.style.display == "") {
      expectationsInfo.style.display = "flex";
      expectationButton.textContent = "Hide Expectations"
    } else {
      expectationsInfo.style.display = "none";
      expectationButton.textContent = "Show Expectations"
    }
  }

  // Step 3: Adding event Listener to make expectations appear/disappear
  expectationButton.addEventListener("click", showExpectations);



// Handling Featured events button

// Step 1: getting primary button class
let primaryEvent = document.getElementsByClassName("primary-events-container")[0];
let featuredEvents = document.getElementById("featured-events");

// Step 2: primary event button
const handlePrimaryEvent = () => {
  if (primaryEvent.style.display == "none" || primaryEvent.style.display == "") {
    primaryEvent.style.display = "block";
    featuredEvents.textContent = "Hide Featured Events";
  } else {
    primaryEvent.style.display = "none";
    featuredEvents.textContent = "Show Featured Events"
  }
}

// Step 3: add Event Listener 
featuredEvents.addEventListener("click", handlePrimaryEvent);



/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Adding the view button to display the other events

  // Step 1: Get view more button
  let viewButton = document.getElementById("view-button");

  // Step 2: Get extra events container 
  let extraEvents = document.getElementById("extra-events");

  // Step 3: Create function to display and hide events
  const addEventsToDoc = () => {
    if (extraEvents.style.display == "" || extraEvents.style.display == "none") {
      extraEvents.style.display = "grid";
      viewButton.textContent = "Show Less";
      console.log("Input logged");
    } else {
      extraEvents.style.display = "none";
      viewButton.textContent = "Show More";
    }
  }

  // Add event listener to listen for click
  viewButton.addEventListener("click", addEventsToDoc);


// Step 1: Add your query for the submit RSVP button here
let button = document.getElementById("rsvp-button");
let count = 8;
const addParticipant = (person) => {
    // Step 2: Write your code to manipulate the DOM here


    const p = document.createElement("p");
    p.textContent = `🎟️ ${person.name} from ${person.state} with ${person.squad} friends has RSVP'd`;
    let rsvpParticipants = document.getElementsByClassName("rsvp-participants")[0];
    rsvpParticipants.appendChild(p);

    // grabbing rsvp count id and removing from DOM
    let rsvpCount = document.getElementById("rsvp-count");
    rsvpCount.remove();

    // Updating count
    count = count + 1 + person.squad;

    // creating new counter element
    const newRsvpCount = document.createElement('p');
    newRsvpCount.setAttribute("id", "rsvp-count");
    newRsvpCount.textContent = `⭐ ${count} people have RSVP'd to this event and they are watch!`;

    // appending to DOM
    rsvpParticipants.appendChild(newRsvpCount);
}

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  let containsErrors = false;

  let rsvpInputs = document.getElementById("rsvp-form").elements;
  let person = {
    name: rsvpInputs[0].value,
    state: rsvpInputs[1].value,
    email: rsvpInputs[2].value,
    squad: Number(rsvpInputs[3].value)
  };
  console.log(person);
  // TODO: Loop through all inputs
  for(let i = 0; i < rsvpInputs.length-1; i++) {
    // TODO: Inside loop, validate the value of each input

    if (rsvpInputs[i].value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
      console.log("clicked")
    } else {
      rsvpInputs[i].classList.remove("error");
      console.log("clicked remove error")
    }
  }

    let email = document.getElementById("email");
      if(!email.value.includes("@")) {
        containsErrors = true;
        email.classList.add("error");
        console.log("This email does not include @");
    } else {
      email.classList.remove("error")
    }

    let squad = document.getElementById("squad");
    squadNum = Number(squad.value);
    if(squadNum < 0 || !squadNum) {
        containsErrors = true;
        squad.classList.add("error");
        console.log("The number entered is less than 0");
    } else {
      squad.classList.remove("error");
    }

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors == false) {
    addParticipant(person);
    toggleModal(person);
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
button.addEventListener("click", validateForm);

// ADDING STATES TO SELECT FORM
  // An array of states
  let states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

  let stateList = document.getElementById("state")

  const listOfStates = states.forEach(item => {
    state.innerHTML += `<option value=${item}>${item} </option>`;
  })





/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/



// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
  if(document.body.classList.contains("no-motion")) return;
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            revealableContainers[i].classList.add("active");
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            revealableContainers[i].classList.remove("active");
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener("scroll", reveal);

document.addEventListener("DOMContentLoaded", () => {
  reveal();
})
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementsByClassName("modal")[0]; // TODO
    let modalContent = document.getElementById("modal-text");
    // TODO: Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
    modalContent.textContent = `Thank's for RSVPing, ${person.name}! We can't wait to see you at the event!`;
    let intervalId =  setInterval(animateImage, 500);
    // Set modal timeout to 5 seconds
    setTimeout(() => {
        // TODO: Update modal display to none
        modal.style.display = "none";
        clearInterval(intervalId);
    }, 5000);
        
}

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.getElementById("modal-img");

const animateImage = () => {
  if (rotateFactor === 0) {
      rotateFactor = 10;
  } else {
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

let closeModuleButton = document.getElementById("close-module-button");

const closeModule = () => {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

closeModuleButton.addEventListener("click", closeModule);