
var rect = require('./rectangle-2.js');

function solveRect(l, b) {
  console.log('Solving for rectangle with l = ' + l + ' and b = ' + b);

  //3rd parameter is callback function
  rect(l, b, function(err, rectangle) {
    if (err) {
      //print out error message from rectangle-2.js
      console.log(err);
    } else {
      //if error is null, then you got back the correct JS object
      //will print out area and perimeter
      console.log('The area of a rectangle of dimensions length = ' + l + ' and breadth = ' + b + ' is ' + rectangle.area());
      console.log('The perimeter of a rectangle of dimensions length = ' + l + ' and breadth = ' + b + ' is ' + rectangle.perimeter());
    }
  });
}

//to test
solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);
