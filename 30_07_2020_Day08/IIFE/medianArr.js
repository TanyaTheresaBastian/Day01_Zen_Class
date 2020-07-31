let arr1 = [10,20,30,40,50];
let arr2 = [66,77,88,99,100];

(function(){
    let medianArr = arr1.concat(arr2);
    let m = medianArr.length;
    console.log(medianArr[m/2-1],medianArr[m/2]);
})(); 