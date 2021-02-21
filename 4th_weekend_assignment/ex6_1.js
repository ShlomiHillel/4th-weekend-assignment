


 
    
     function accum (str) {
      result = '';
     for (var i = 0;i < str.length; i++) {
       var ch = str.charAt(i);
       for (var j = 0; j <= i; j++) {
         if (j == 0) {
           result += ch.toUpperCase(ch);
         } else {
           result += ch.toLowerCase(ch);
         } 
       }
       result += "-";
     }
     return result.substring(0, result.length-1);
    }

console.log(accum('gbtbtnyn'));

