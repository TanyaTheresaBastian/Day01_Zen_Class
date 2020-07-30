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
var num3 = +nums[2];
var tur = 2;
var horse = 4;
var pigs = 4;
var total;
function countAnimals(num1,num2,num3)
{
    total = ((tur*num1)+(horse*num2)+(pigs*num3))
    return total
}

var result = countAnimals(num1,num2,num3);
console.log(result)

});
