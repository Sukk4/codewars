// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
  var arr = str.split(" ");
  for(var i=0; i<arr.length; i++){
    arr[i] = arr[i].slice(1,arr[i].length).concat(arr[i].charAt(0), "ay");
  }
  return arr.join(" ");
}