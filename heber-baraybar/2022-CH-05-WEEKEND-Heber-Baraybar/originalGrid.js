let rows = 5,
  column = 5;
export const originalGrid = () => {
  let result = [];
  for (let i = 0; i < row; i++) {
    let row = [];
    for (let j = 0; j < column; j++) {
      row.push(0);
    }
    result.push(row);
  }

  return result;
};
originalGrid();
