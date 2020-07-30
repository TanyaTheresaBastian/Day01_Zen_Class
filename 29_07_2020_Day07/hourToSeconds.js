const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var hrs = +userInput;

var sec;
function hourToSeconds(hrs)
{
    sec = hrs * 60 *60 ;
    return sec
}

var result = hourToSeconds(hrs);
console.log(result)

});
