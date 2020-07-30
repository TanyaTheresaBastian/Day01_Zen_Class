var sumCSV = ("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9");


var sum = 0;
function sumCSVs (sumCSV)
{
    var nums = sumCSV.split(",");
    var num = nums.map(val => +val);
    for(var i=0; i <num.length;i++)
    {
        sum += num[i];
    }
    return sum
    
}
var result = sumCSVs (sumCSV)
console.log(result)
