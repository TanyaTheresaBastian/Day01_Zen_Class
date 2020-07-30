var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

function mergeArr (arr1,arr2)
{
    var arr = arr1.concat(arr2)
    return arr
}

var result = mergeArr (arr1,arr2)
console.log(result)