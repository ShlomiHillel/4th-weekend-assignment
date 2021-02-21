const arr = [11,156,15000,12355,6,13, 5,353235]
 
function lowsum(arr) {
    let fi =arr [0]
    for (let i = 1  ; i < arr.length ; i++) {
        if (fi > arr [i]) {
        fi = arr[i]; 
        } 
    } 
    console.log(fi);
    return fi;
}
lowsum (arr);