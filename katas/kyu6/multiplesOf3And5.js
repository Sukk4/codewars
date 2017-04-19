// https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number){
  var numbers = [];
  for (var i=3; i<number; i++){
    if (i % 3 === 0 || i % 5 === 0) {
      numbers.push(i);
    } 
  }
  return numbers.reduce(
    function(total, n){
      return total + n;
    }
  );
}