const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var nums = userInput[0].split(" ");
var num1 = +nums[0];
var num2 = +nums[1];

var total;
function frames(num1,num2)
{
    total = num1 * num2 * 60;
    return total
}

var result = frames(num1,num2);
console.log(result)

});
