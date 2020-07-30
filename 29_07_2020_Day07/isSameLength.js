const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var word = userInput[0].split(" ")
var firWord = word[0].split("")
var secWord = word[1].split("")

var fiLength = firWord.length;
var seLength = secWord.length;


function isSameLength (word)
{
    if (fiLength === seLength)
    {
        return true
    }
    else
    {
        return false
    }
    
}

var result = isSameLength(word);
console.log(result)

});
