var vowels = "aeiou";

function pigLatin(string){
  var str = string.toLowerCase();
  
  if(! /^[a-z]+$/.test(str)) return null;
  
  if (vowels.indexOf(str[0]) >= 0) {
    return str + "way";
  }
  
  for(i in str) {
    if (vowels.indexOf(str[i]) >= 0) {
      return str.slice(i) + str.slice(0, i) + "ay";
    }
  }
  
  return str + "ay"; 
}
