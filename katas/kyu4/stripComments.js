// https://www.codewars.com/kata/strip-comments

function solution(input, markers){
  let strArr = input.split("\n");
  for (let i=0; i<strArr.length; i++){
    for (let j=0; j<markers.length; j++){
      if (strArr[i].includes(markers[j])){
        strArr[i] = strArr[i].replace(strArr[i].slice(strArr[i].indexOf(markers[j]), strArr[i].length ), "").trim();
      }
    }
  }
  return strArr.join("\n");
}