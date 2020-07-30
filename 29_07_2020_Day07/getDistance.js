const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var coOrdinates = userInput[0].split(" ")
var nums = coOrdinates.map(val => +val);

var x1 = nums[0];
var y1 =nums[1];
var x2 = nums[2];
var y2 = nums[3];

var distance;
function getDistance(x1,y1,x2,y2)
{
    distance = Math.sqrt((x2-x1) + (y2-y1));
    return distance

}

var result = getDistance(x1,y1,x2,y2);
console.log(result)

});
