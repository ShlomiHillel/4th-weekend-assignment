

function nb_year (p0, per, aug, p){
  let ptoh =p0;
    for (var yr = 0; ptoh <= p ; yr++) {  
      ptoh += ptoh*(per/100)+aug;   
    }  
    return yr;
}

// console.log(nb_year(1500, 5, 100, 5000));
