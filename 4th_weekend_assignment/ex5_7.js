
var str = 'ufuhlkji mdmoeoekll olfef fe fweokfomoo'

function short(str){
    let arr = str.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length
  }

console.log(short(str));

