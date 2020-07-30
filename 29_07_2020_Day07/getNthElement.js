const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var arr = userInput[0].split(" ")
var myArr = arr.map(val => +val)
var index = +userInput[1];

function getNthElement(myArr,index)
{
    for(var i =0; i< myArr.length;i++)
    {
        if (index === i)
        {
            return myArr[i]
        }
        
    }
}
var result = getNthElement(myArr,index);
console.log(result)
});
 