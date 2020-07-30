var str = "Guvi Geek";
function revStr (str)
{
    var sp = str.split("")
    var rev = sp.reverse();
    var jn = rev.join("")
    return jn
}

var result = revStr (str)
console.log(result)