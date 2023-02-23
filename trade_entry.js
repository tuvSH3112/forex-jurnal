// Get the form and the add trade button
var form = document.querySelector('form');
var addTradeBtn = document.querySelector('#addTrade');

// Add an event listener to the add trade button
addTradeBtn.addEventListener('click', function(e) {
	// Prevent the form from submitting
	e.preventDefault();

	// Get the form values
	var date = form.elements.date.value;
	var symbol = form.elements.symbol.value;
	var entry = form.elements.entry.value;
	var exit = form.elements.exit.value;
	var size = form.elements.size.value;
	var side = form.elements.side.value;
	var returnVal = form.elements.return.value;
	var setup = form.elements.setup.value;
	var result = form.elements.result.value;

	// TODO: Add code to do something with the form values, e.g. send them to a server or update the dashboard page

	// Reset the form
	form.reset();

	// Hide the information tab
	var informationTab = document.getElementById("information-tab");
	informationTab.style.display = "none";
});
fetch('https://github.com/tuvSH3112/forex-jurnal.git')
.then(response => response.json())
.then(data => {
  // Do something with the data
});
