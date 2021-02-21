


function cml(str){
    str = str.split('');
    return str.map(function(a, i){
      if(a == '-' || a == '_'){
        a = str[i+1];
        str.splice(i+1, 1);
      }
      return a;
    }).join('');
  }
console.log(cml('Aaa-b-ra ca-db-ra_a'));

