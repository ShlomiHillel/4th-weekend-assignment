


 
    
     function duplinum(str){
        const strr = str.toLowerCase().split('').sort().join('');
        const arr= strr.match(/(.)\1+/g);
        if(arr==null) { 
            return 0
        }
        else  {
            return arr.length
        }; 
    }
console.log(duplinum('aabBcde'));

