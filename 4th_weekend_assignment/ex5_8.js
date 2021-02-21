
var str = 'qwe fgtt bhhbh ll p llll'

function long(str){
    let arr = str.split(" ").sort((a, b) => b.length - a.length);
    return arr[0]
  }

console.log(long(str));

