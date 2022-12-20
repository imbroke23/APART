document.getElementById("page-selector").addEventListener("change", function() {
  // Get the selected value
  var selectedValue = this.value;
  // Redirect the user to the selected page
  window.location = selectedValue;
});


