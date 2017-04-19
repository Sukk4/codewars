// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

function rot13(str) {
  var newString = "";
  for (var i=0, len=str.length; i<len; i++){
    var code = str.charCodeAt(i);
    if (code >= 65 && code <= 90){
      code+=13;
      if (code > 90) code -= 26;
      newString += String.fromCharCode(code);
    }
    else if (code >= 97 && code <= 122){
      code+=13;
      if (code > 122) code -= 26;
      newString += String.fromCharCode(code);
    }
    else {
      newString += str.charAt(i);
    }
  }
  return newString;
}