const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var str = userInput;

var intrg;
function toInteger(str)
{
    intrg = +str;
    return intrg
}

var result = toInteger(str);
console.log(result)

});
