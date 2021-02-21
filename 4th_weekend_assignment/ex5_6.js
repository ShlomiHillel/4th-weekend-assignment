


function mask(pass) {
    var arr= Array.from(pass, (char, ii) => ii < pass.length - 4 ? "#" : char);
     return arr.join('')
}

console.log(mask('shloillel'));

