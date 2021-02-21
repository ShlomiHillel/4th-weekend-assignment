
function cent(n) {
    let cen;
    n < 0? cen = Math.floor( (n-0.0001) /100 ) : cen = Math.ceil( (n+0.0001) /100 ); 
    return cen;
}
console.log(cent(1999));