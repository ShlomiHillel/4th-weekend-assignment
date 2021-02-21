

const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"
 
    
     function longest(str1, str2) {
        var distStr, distArr = []
        var comstr= str1 + str2 
        var value;
        var n= 0;
        comstr = Array.from(comstr)
        for(value of comstr) {
        !distArr.includes(value) ? distArr.push(value):n++ ; 
        }
        distStr = distArr.sort().join('')
        return distStr
      }
      
      
      
console.log(longest(a,b));

