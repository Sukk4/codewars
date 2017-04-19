// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  var words = str.split(" ");
  for (var i=0; i<words.length; i++){
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join().replace(/,/g," ");
}