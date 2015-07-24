function listPosition(word) {
  var alphabetized = word.split('').sort();
  return findNumber(word, alphabetized);
}

function findNumber(word, arr) { 
  if(word.length == 1) {
    return 1;
  }
  
  var numerator = factorial(word.length);
  var denominator = 1;
  var counts = {};
  arr.forEach(function(i) { counts[i] = (counts[i]||0) + 1; });
  
  for(i in counts) {
    if(counts.hasOwnProperty(i)) {
      denominator *= factorial(counts[i]);
    }
  }
  
  numPerms = numerator/denominator;
  index = arr.indexOf(word[0]);
  numPerms *= index/arr.length;
  
  arr.splice(index, 1);
  
  return numPerms + findNumber(word.slice(1), arr);
}

function factorial(x) {
    if(x == 0) {
        return 1;
    } 
    else {
        return x * factorial(x - 1);
    }
}
