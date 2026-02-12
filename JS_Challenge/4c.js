let randomIntArray = [];
for (let i = 0; i < 10; i++) {
    randomIntArray.push(Math.floor(Math.random() * 100) + 1);
}
let highest = Math.max(...randomIntArray);
console.log("Highest number in the array:", highest);