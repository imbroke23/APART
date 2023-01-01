// Get the current URL of the page
var currentURL = window.location.href;

// Extract the number from the URL (e.g. extract "34" from "34.html")
var currentNumber = parseInt(currentURL.split("/").pop().split(".")[0]);

// Calculate the previous and next numbers
var prevNumber = currentNumber - 1;
var nextNumber = currentNumber + 1;

// Update the "href" attributes of the buttons
document.getElementById("prev-button").href = prevNumber + ".html";
document.getElementById("next-button").href = nextNumber + ".html";

// Attach functions to the buttons
document.getElementById("prev-button").addEventListener("click", function() {
  // Navigate to the previous page
  window.location = prevNumber + ".html";
});
document.getElementById("next-button").addEventListener("click", function() {
  // Navigate to the next page
  window.location = nextNumber + ".html";
});
