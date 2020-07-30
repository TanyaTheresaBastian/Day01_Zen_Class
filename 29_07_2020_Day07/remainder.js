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

var remaind;
function remainder(num1,num2)
{
    remaind = num1 % num2;
    return remaind
}

var result = remainder(num1,num2);
console.log(result)

});
