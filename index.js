// Use hamburger menu for responsive design
// Get hamburger button and list items
let hamburgerMenu = document.getElementById("hamburger-menu");
let listItems = document.querySelector(".navbar ul");

//  Show list items
const showList = () => {
  if (listItems.style.display === "none") {
    listItems.style.display = "flex"
  }
}

hamburgerMenu.addEventListener("click", showList);



/*** Dark Mode ***
  
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
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


// Handling expectations button

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
let count = 3;
const addParticipant = () => {
    // Step 2: Write your code to manipulate the DOM here
    let name = document.getElementById("name").value;
    let state = document.getElementById("state").value;
    let email = document.getElementById("email").value;

    const p = document.createElement("p");
    p.textContent = `🎟️ ${name} from ${state} has RSVP'd`;
    let rsvpParticipants = document.getElementsByClassName("rsvp-participants")[0];
    rsvpParticipants.appendChild(p);

    // grabbing rsvp count id and removing from DOM
    let rsvpCount = document.getElementById("rsvp-count");
    rsvpCount.remove();

    // Updating count
    count += 1;

    // creating new counter element
    const newRsvpCount = document.createElement('p');
    newRsvpCount.setAttribute("id", "rsvp-count");
    newRsvpCount.textContent = `⭐ ${count} people have RSVP'd to this event!`;

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

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  for(let i = 0; i < rsvpInputs.length; i++) {
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

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors == false) {
    addParticipant();
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
button.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/

