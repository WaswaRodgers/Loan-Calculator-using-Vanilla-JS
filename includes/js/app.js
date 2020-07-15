document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
	const postAmount = document.getElementById("amount").value;
	const postInterest = document.getElementById("interest").value;
	const postYears = document.getElementById("years").value;

	console.log(postAmount, postInterest, postYears)
}