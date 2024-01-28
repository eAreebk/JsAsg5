/*Create a program that defines a function called isPrime whichtakesapositive integer as a parameter and 
returns true if the number is prime and false otherwise.
 Prompt the user for a number andusethe function to determine if it's a prime number.*/

 var num = +prompt("Please enter a positive integer to check whether it's a prime number or not", "2");

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let sqrtNum = Math.sqrt(num);
    for (let i = 5; i <= sqrtNum; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

var result = isPrime(num);
console.log(result);
