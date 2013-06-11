/* ============  Crystal Ball Javascript ================== */

/* This is the list of possible answers */
var answers = new Array(
	"Yes.", 
	"No.",  
	"Ask again later."
); 


function getAnswer() {
    
	/* Ask for the question */
	var question = prompt("What is your question?", "");
	
	/* Return an answer if a question was asked */
	if (question) {
		/* Get a random number */
		num = Math.round((answers.length - 1) * Math.random());
    	
		/* Use the random number to return the answer from the list */
		document.getElementById("ball-answer").innerHTML=answers[num];
		}
	return;
}