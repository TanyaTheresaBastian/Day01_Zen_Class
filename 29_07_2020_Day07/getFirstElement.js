const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var num = userInput[0].split(" ");
// console.log(num[0]);

var first;
function getFirstEle(num)
{
    first = num[0];
    return first
}

var result = getFirstEle(num);
console.log(result)

});
