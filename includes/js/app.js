document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
	const postAmount = document.getElementById("amount").value;
	const postInterest = document.getElementById("interest").value;
	const postYears = document.getElementById("years").value;

	//calculate
	const principal = parseFloat(postAmount);
	const interest = parseFloat(postInterest) / 100 / 12;
	const payment = parseFloat(postYears) * 12;
	

	console.log(principal)
	console.log(interest)
	console.log(payment)

	e.preventDefault();
}