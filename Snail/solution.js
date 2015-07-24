snail = function(arr) {
  var result = [];
  var numIncrement = arr[0].length;
  var x = -1, y = 0;
  var round = 1;
  var incr = function(a) { return a + 1; }
  var decr = function(a) { return a - 1; }
  var f = incr;
  var i = 0;
  
  //loops through outside of array
  while( round < arr.length * 2 ) {
    i = 0;
    if(round % 2 == 0) {
      while(i < numIncrement) {
        y = f(y);
        result.push(arr[y][x]);
        i++;
      }
    f = (f == incr) ? decr : incr;
    }
    else {
      while(i < numIncrement) {
        x = f(x);
        result.push(arr[y][x]);
        i++;
      }
    numIncrement--;
    }
  
  round++;
  }
  
  return result;
}
