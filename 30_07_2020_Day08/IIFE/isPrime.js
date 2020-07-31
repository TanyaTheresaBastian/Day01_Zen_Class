let arr = [11,25,14,85,97,36,10,37,55,81];

(function(){
    function isPrime(num){
        for(let i=2;i<num;i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }
    let prime_arr = arr.filter(val=>isPrime(val));
    console.log(prime_arr);
})();