


function initals(name) {
    var spl = name.split(" ");
    var int = (spl[0].charAt(0) + "." + spl[1].charAt(0)).toUpperCase();
    return int;
}


console.log(initals('shlomi hillel'));

