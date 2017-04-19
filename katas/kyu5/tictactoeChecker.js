// https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(board) {
  for (var i=0; i<board.length; i++){
    if (sameThree(board[i][0],board[i][1],board[i][2])) return board[i][0];
    if (sameThree(board[0][i],board[1][i],board[2][i])) return board[i][0];
  }
  if (sameThree(board[0][0],board[1][1],board[2][2])) return board[0][0];
  if (sameThree(board[0][2],board[1][1],board[2][0])) return board[0][2];
  for (var i=0; i<board.length; i++){
    for (var j=0; j<board.length; j++){
      if (board[i][j] === 0) return -1;
    }
  }
  return 0;
}
function sameThree(a,b,c){
  if (a === b && a === c && a > 0) return true;
  else return false;
}