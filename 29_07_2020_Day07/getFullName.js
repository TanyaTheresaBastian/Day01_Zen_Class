const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {

var name = userInput[0].split(" ");
var firName = name[0]
var lastName = name[1]

var fullName;
function getFullName (name)
{
    fullName = firName + " " +lastName;
    return fullName
}

var result = getFullName(name);
console.log(result)

});
