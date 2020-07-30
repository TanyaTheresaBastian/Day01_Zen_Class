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


function areBothOdd(num1,num2)
{
    
    if((num1 % 2 !== 0) && (num2 % 2 !== 0))
    {
       return true 
    }
    else
    {
        return false
    }
}

var result = areBothOdd(num1,num2);
console.log(result)

});
