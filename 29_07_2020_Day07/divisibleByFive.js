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

var div;
function divisibleByFive(num)
{
    div = num % 5;
    if(div === 0)
    {
       return true 
    }
    else
    {
        return false
    }
}

var result = divisibleByFive(num);
console.log(result)

});
