function sumStrings(a,b) { 
  /* 
  //this commented section does not work with large numbers  
  let sum = Number(a) + Number(b);
  return sum.toString();
  */

  let result = "";
  
  let longerString = (a.length >= b.length) ? a : b;
  let shorterString = (a.length >= b.length) ? b : a;
  
  while ( shorterString.length < longerString.length ){
    shorterString = "0" + shorterString;
  }

  let tempNumber = 0;
  for (let i = longerString.length; i > 0; i--){
    let x = Number(longerString.charAt(i-1)) + Number(shorterString.charAt(i-1)) + tempNumber;
    tempNumber = 0;
    while (x >= 10){
      x = x-10; 
      tempNumber += 1;
    }
    result = x.toString() + result;
  }
  
  if (tempNumber > 0) result = tempNumber.toString() + result;
  
  while (result.charAt(0) === "0") {
    result = result.substr(1, result.length);
  }

  return result;

}