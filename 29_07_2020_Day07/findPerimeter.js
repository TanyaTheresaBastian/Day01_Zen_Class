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
var height = +nums[0];
var width = +nums[1];

var peri;
function findPerimeter(height,width)
{
    peri = 2 * (height + width);
    return peri
}

var result = findPerimeter(height,width);
console.log(result)

});
