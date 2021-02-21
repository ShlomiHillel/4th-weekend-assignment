
 function findnexts (sqrnum) {
    let num  = Math.sqrt(sqrnum);
    num === Math.round(num)? num = (num+1)*(num+1): num = -1;
    return num;
 } 

//  console.log(findnexts (25));