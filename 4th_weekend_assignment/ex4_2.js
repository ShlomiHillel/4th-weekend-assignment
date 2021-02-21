

function tribo(n) {
    
    const arr = [0,0,1];
    for (var i = 3; i < n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]+arr[arr.length - 3]);
    }
    
     
    return arr.join() ;
}
console.log(tribo(10));









