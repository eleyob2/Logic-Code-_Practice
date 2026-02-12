let input = prompt("Enter a number to calculate its factorial:");
let number = parseInt(input);

if (isNaN(number) || number < 0) {
    console.log("Please enter a valid non-negative integer.");
}
else if (input === null) {
    console.log("User cancelled the prompt.");
}
else {
    let result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
}

function factorial(n) {
    if (isNaN(n) || n < 0) {
        console.log("Please enter a valid non-negative integer.");
        return undefined;
    }
    else if (n === 0 || n === 1) {
        return 1;
    } 
    else {
        return n * factorial(n - 1);
}}