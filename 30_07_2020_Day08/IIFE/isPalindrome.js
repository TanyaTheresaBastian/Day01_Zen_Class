let arr = ["malayalam","tanya","peeweep","murdrum","color"];

(function(){
    function isPalindrome(str){
        let pal = str.split("").reverse().join("")
        if(pal===str){
            return true;
        }else{
            return false;
        }
    }
let newArr = arr.filter((val)=>isPalindrome(val))
console.log(newArr)
})();