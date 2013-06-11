// A list of things you would probably rather not do.
var thingsToDo = ["walk the dog",
                  "clean the bathroom",
                  "run a mile",
                  "eat sushi"];


// Get two different things to do.
function randomPair() {
  // Get two numbers.
  var thing1 = Math.floor((thingsToDo.length) * Math.random());
  var thing2 = Math.floor((thingsToDo.length) * Math.random());

  // Get a new number if the two numbers are the same.
  while(thing1 == thing2) {
    thing2 = Math.floor((thingsToDo.length) * Math.random());
  }

  // Return a list with two different things to do.
  return [thingsToDo[thing1], thingsToDo[thing2]];
}



function wouldYouRather() {
  // Get two random things to do.
  var things = randomPair();
  
  // Make some words and buttons
  var html = "Would you rather <button id=\"thing1\" onClick=\"iWouldRather(1, 2);\">" + things[0] + "</button> or <button id=\"thing2\" onClick=\"iWouldRather(2, 1);\">" + things[1] + "</button>";
  
  // Put the question into the question area.
  document.getElementById("question-area").innerHTML = html;
  return;
}

// Put the answer into the aswer list.
function iWouldRather(badThingNumber, worseThingNumber) {
  // Find the answer list so we can use it later.
  var answerList = document.getElementById("answer-list");
  
  // Find out what the bad thing and worse thing were.
  var badThing = document.getElementById("thing" + badThingNumber).textContent;
  var worseThing = document.getElementById("thing" + worseThingNumber).textContent;

  // Add the new answer to the end of our list of answers.
  answerList.innerHTML = answerList.innerHTML + "<li>You would rather " + badThing + " than " + worseThing + ".</li>";
}