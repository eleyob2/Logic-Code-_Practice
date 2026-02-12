let input = input("Enter a number to calculate its factorial:");
let number = parseInt(input);

function factorial(n) {
    if (input !== null) {
        console.log("User cancelled the prompt.");
        return undefined;
    }
    else if (isNaN(n) || n < 0) {
        console.log("Please enter a valid non-negative integer.");
        return undefined;
    }
    else if (n === 0 || n === 1) {
        return 1;
    } 
    else {
        let result = factorial(n - 1);
        return n * result;
}}