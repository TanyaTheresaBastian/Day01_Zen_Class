let arr = [11,25,14,85,97,36,10,37,55,81];

(function(){
    let isOdd = arr.filter(val => val%2 !== 0);
    console.log("Odd Numbers:", isOdd);
})();