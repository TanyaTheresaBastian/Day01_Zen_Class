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

// var eve;
function isEven(num)
{
    // eve = num % 2;
    if((num % 2) === 0)
    {
       return true 
    }
    else
    {
        return false
    }
}

var result = isEven(num);
console.log(result)

});
