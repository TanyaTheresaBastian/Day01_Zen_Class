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

var sum;
function lessThan100(num1,num2)
{
    sum = num1 + num2;
    if(sum<100)
    {
       return true 
    }
    else
    {
        return false
    }
}

var result = lessThan100(num1,num2);
console.log(result)

});
