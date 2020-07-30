const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var num = +userInput;
// console.log(num)
var ele = 0;
function addFive(num)
{
    ele = num +5;
    return ele
}

var result = addFive(num);
console.log(result)

});
