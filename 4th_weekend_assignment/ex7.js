
  
      

function isIsogram(str){
      var arr = str.toLowerCase().split("");
      for ( var i = 0; i < str.length; i++ ) {
        var ch = arr[i];  
        var countChar = arr.reduce( function( n, val ) {
        return n + (val === ch);
        }, 0);
        if ( countChar > 1 ) {
        return false;
        }
      }  
      
      return true;
      
    
  
  }


  console.log(isIsogram('asdfghjklzxcvbnm'));