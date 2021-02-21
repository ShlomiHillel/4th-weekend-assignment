


function fibo(n) {
    
    const arr = [0,1];
    for (var i = 2; i < n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    
     
    return arr.join() ;
}
console.log(fibo(10));






