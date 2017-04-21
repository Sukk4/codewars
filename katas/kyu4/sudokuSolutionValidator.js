// https://www.codewars.com/kata/529bf0e9bdf7657179000008

function validSolution(board) {
  if (testRows(board) && testColums(board) && testGrid(board)) {
    return true;
  }
  return false;
}

function testRows(board) {
  for (var i = 0; i < 9; i++) {
    let checkRow = [];
    for (var j = 0; j < 9; j++) {
      if (checkRow.indexOf(board[i][j]) === -1) {
        checkRow.push(board[i][j]);
      } else {
        return false;
      }
    }
  }
  return true;
}

function testColums(board) {
  for (var i = 0; i < 9; i++) {
    let checkColumn = [];
    for (var j = 0; j < 9; j++) {
      if (checkColumn.indexOf(board[j][i]) === -1) {
        checkColumn.push(board[j][i]);
      } else {
        return false;
      }
    }
  }
  return true;
}

function testGrid(board) {
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      let checkGrid = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (checkGrid.indexOf(board[x + i][y + j]) === -1) {
            checkGrid.push(board[x + i][y + j]);
          } else {
            return false;
          }
        }
      }
    }
  }
  return true;
}