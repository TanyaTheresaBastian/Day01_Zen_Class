const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var min = +userInput;
// console.log(num)
var sec;
function toSeconds(min)
{
    sec = min * 60;
    return sec
}

var result = toSeconds(min);
console.log(result)

});
