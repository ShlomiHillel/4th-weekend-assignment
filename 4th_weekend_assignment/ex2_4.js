

const arr = [7,7,7,7,17,7,7,7];

function findUnq(ar) {
 for (let i = 0; i < ar.length ; i++) {
    let diffnum = -1;
    ar[i] != ar[i+1]? diffnum = -1 : ar[i] != ar[i+2] && (diffnum = ar[i+2]) ;
    if (diffnum != -1) {
        return diffnum;     
    }
 }
}
// console.log(findUnq(arr));