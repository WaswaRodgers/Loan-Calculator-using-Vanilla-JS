document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
	const postAmount = document.getElementById("amount").value;
	const postInterest = document.getElementById("interest").value;
	const postYears = document.getElementById("years").value;

	//calculate
	const principal = parseFloat(postAmount);
	const interest = parseFloat(postInterest) / 100 / 12;
	const payment = parseFloat(postYears) * 12;
	
	//compute monthly payments
	const x = Math.pow(1 + interest, payment);
	const monthly = ((principal * x * interest) / (x - 1)).toFixed(2);
	

	//compute total interest
	const totalInterest = (monthly * payment - principal).toFixed(2);

	//Compute total payment
	const totalPayment = (monthly * payment).toFixed(2);
	
	//show results
	

	e.preventDefault();
}