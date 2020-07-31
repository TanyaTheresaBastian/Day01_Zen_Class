let arr = [100,101,102,103,104];

let rotate = function(arr, k){
    let myArr = arr.splice(0, k);
    return arr.concat(myArr);
}
console.log(rotate(arr,3));