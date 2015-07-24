function span(arr, predicate) {
  var trueArr = [];
  var afterArr = [];
  
  for(i in arr) {
    if(predicate(arr[i])) {
      trueArr.push(arr[i]);
    }
    else {
      afterArr = arr.slice(i);
      break;
    }
  }
  
  return [trueArr, afterArr];
}
