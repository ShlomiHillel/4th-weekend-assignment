

var bustop = [ [10, 0], [6, 3], [1, 8], [5, 3], [0, 10] ];
var onthebus = bustop.reduce((n, [In, Out]) => n + In - Out, 0 );
var onbus = function (bustop) {
  let x = 0;
  bustop.forEach(a => x = x + a[0] - a[1]);
  return x
};
