// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  var newArr = [];
  var fixed = 0;
  for(var i=0; i<arr.length; i++){
    if ((arr[i] === "NORTH" && arr[i+1] === "SOUTH") 
    || (arr[i] === "SOUTH" && arr[i+1] === "NORTH") 
    || (arr[i] === "EAST" && arr[i+1] === "WEST") 
    || (arr[i] === "WEST" && arr[i+1] === "EAST")) {
      i++;
      fixed++;
    } else {
      newArr.push(arr[i]);
    }
  }
  if (fixed > 0) { return dirReduc(newArr); }
  else { return newArr; }
}