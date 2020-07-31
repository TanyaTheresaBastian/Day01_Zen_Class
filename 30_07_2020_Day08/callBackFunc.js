function mathOperations (indx,opera)
{
    var num1=100, num2=200;
    return opera[indx](num1,num2);
}
function add(a,b)
{
    return a+b;
}
function subr(a,b)
{
    return a-b;
}
function multi(a,b)
{
    return a*b;
}
let oper =[add,subr,multi];
res1=mathOperations(0,oper);
console.log(res1);
res2=mathOperations(1,oper);
console.log(res2);
res3=mathOperations(2,oper);
console.log(res3);
    