


function towird(str)  {
    let  newStr = [];
    for( let i in str ) {
       i%2 == 0? newStr.push(str[i].toUpperCase()):newStr.push(str[i].toLowerCase());
        }
    return newStr.join('');
};


console.log(towird('abra cadbra'));

