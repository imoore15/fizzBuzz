document.addEventListener("DOMContentLoaded", function(event) { 
	usernumber();
});

	console.log("hello World");

// forloop 1-100


// if then
// log in console result 


//* prompt 

function usernumber() {
	var number = prompt("Enter any number you wish between 1 and 100");
	fizzbuzz(number);
}
 

//* convert from string to number

//* parse int

function fizzbuzz(number) {
	if (number % 3 == 0 && number % 5 == 0) {
		document.getElementById("display").innerHTML += "fizzbuzz<br>";
	}

	else if ( number % 5 == 0) {
		document.getElementById("display").innerHTML += "buzz<br>";
	}

	else if ( number % 3 == 0) {
		document.getElementById("display").innerHTML += "fizz<br>";

	}

	else {
		document.getElementById("display").innerHTML += "(number) + <br>";
	}
};

 



 function namingishard() {
 	for (var i=1; i <=100; i++){
	
	fizzbuzz(i);
	}
	}

/* function sum(number1, number2, number3) {
	var sum = number1 + number2 + number3 + " is the sum";
	return sum;
}

function divi(number, numbers) {
	var divi = number / numbers;
	return divi;
}  */