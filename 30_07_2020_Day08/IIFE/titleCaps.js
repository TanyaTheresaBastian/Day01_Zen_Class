(function(){
    
    let fav = ["blue","pink","peach","black"];
    let res = fav.map(val => {
        return val[0].toUpperCase() + val.slice(1);
    });
    console.log("Title Caps:", res);
})();