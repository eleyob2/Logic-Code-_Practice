const vowels = ['a', 'e', 'i', 'o', 'u'];
function vowel_counter(word) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word.toLowerCase()[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(vowel_counter("Hello World"));