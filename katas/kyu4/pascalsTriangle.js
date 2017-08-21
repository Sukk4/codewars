function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  var arr = [];
  if (n > 0) arr.push(1);
  for (var i=1; i<n; i++){
    var tempArr = [];
    var previousArr = arr.slice( arr.length-i, arr.length );
    for (var j = 0; j < previousArr.length + 1; j++ ){
      var num1 = previousArr[j-1] || 0;
      var num2 = previousArr[j] || 0;
      tempArr.push( num1 + num2 );
    }
    arr = arr.concat( tempArr );
  }
  return arr;
}
