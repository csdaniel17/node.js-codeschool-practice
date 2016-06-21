//Rectangle module exports a function
//node supplies callback function as a parameter
module.exports = function(x, y, callback) {
  //try catch - way of handling errors
  try {
    //first check to make sure it is not null
    if (x < 0 || y < 0) {
      throw new Error('Rectangle dimensions should be greater than zero: l = ' + x + ', and b = ' + y);
    } else {
      //no error, so set error parameter to null
      callback(null, {
        //second parameter is JS object
        perimeter: function() {
          return (2 * (x + y)); //x & y are still accesible due to JS closures
        },
        area: function() {
          return x * y; //x & y are still accesible due to JS closures
        }
      });
    }
  }
  //will catch error and take care of handling the error
  catch(error) {
    callback(error, null);
  }
};
