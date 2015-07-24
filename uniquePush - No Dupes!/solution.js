function uniquePush(arr, obj) {
  for(i in arr) {
    if(!arr[i].phoneNumber || !obj.phoneNumber ||
        arr[i].phoneNumber == obj.phoneNumber) {
         return false;
       }
  }
  arr.push(obj);
  return true;
}
