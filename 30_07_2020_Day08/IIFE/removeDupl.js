let arr = [22,10,14,25,14,69,87,22,14,20,36,41,10];

(function(){
    let unique_arr = [];
    for(var i of arr){
        if(unique_arr.indexOf(i)===-1){
            unique_arr.push(i);
        }
    } 
    console.log(unique_arr);
})();