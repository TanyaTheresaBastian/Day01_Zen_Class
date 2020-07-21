let myArray = [789,456,123,147,258,369,741,852,963,951,753]
let sum =0;
for (var i =0; i<myArray.length;i++)
{
    sum += +myArray[i]
}
console.log("Array : " + "[789,456,123,147,258,369,741,852,963,951,753]")
console.log("Sum : " + sum);