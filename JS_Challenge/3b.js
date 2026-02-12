let number = prompt("Enter a number: ");

function evnod(number) {
    if (number === 0) {
        return "neither even nor odd";} 
    else if (number % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }}

console.log(evnod(number));