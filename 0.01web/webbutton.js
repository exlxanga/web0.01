// get the button element
var myButton = document.getElementById("myButton");

// add an event listener to the button
myButton.addEventListener("click", function() {
	// get the heading element
	var myHeading = document.getElementsByTagName("h1")[0];

	// change the text of the heading
	myHeading.textContent = "Hello, JavaScript!";
});