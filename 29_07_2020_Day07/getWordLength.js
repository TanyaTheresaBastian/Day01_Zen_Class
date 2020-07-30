const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var word = userInput[0].split("")

var fullLength;
function getWordLength (word)
{
    fullLength = word.length;
    return fullLength
}

var result = getWordLength(word);
console.log(result)

});
