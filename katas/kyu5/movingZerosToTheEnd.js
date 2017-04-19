// https://www.codewars.com/kata/52597aa56021e91c93000cb0

var moveZeros = function (arr) {
  for(var i=arr.length-1; i>=0; i--){
    if(arr[i] === 0){
      arr.push(arr.splice(i,1)[0]);
    }
  }
  return arr;
}