function updateGrid() {
    //perform one iteration of grid update
    for (var j = 1; j < gridHeight - 1; j++) {
        //iterate through rows
        for (var k = 1; k < gridWidth - 1; k++) {
            //iterate through columns
            var totalCells = 0;
            //add up the total values for the surrounding cells
            totalCells += theGrid[j - 1][k - 1]; //top left
            totalCells += theGrid[j - 1][k]; //top center
            totalCells += theGrid[j - 1][k + 1]; //top right
            totalCells += theGrid[j][k - 1]; //middle left
            totalCells += theGrid[j][k + 1]; //middle right
            totalCells += theGrid[j + 1][k - 1]; //bottom left
            totalCells += theGrid[j + 1][k]; //bottom center
            totalCells += theGrid[j + 1][k + 1]; //bottom right
            //apply the rules to each cell
            if (theGrid[j][k] === 0) {
                switch (totalCells) {
                    case 3:
                        mirrorGrid[j][k] = 1; //if cell is dead and has 3 neighbours, switch it on
                        break;
                    default:
                        mirrorGrid[j][k] = 0; //otherwise leave it dead
                }
            } else if (theGrid[j][k] === 1) {
                //apply rules to living cell
                switch (totalCells) {
                    case 0:
                    case 1:
                        mirrorGrid[j][k] = 0; //die of lonelines
                        break;
                    case 2:
                    case 3:
                        mirrorGrid[j][k] = 1; //carry on living
                        break;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        mirrorGrid[j][k] = 0; //die of overcrowding
                        break;
                    default:
                        mirrorGrid[j][k] = 0; //
                }
            }
        }
    }
    //copy mirrorGrid to theGrid
    for (var j = 0; j < gridHeight; j++) {
        //iterate through rows
        for (var k = 0; k < gridWidth; k++) {
            //iterate through columns
            theGrid[j][k] = mirrorGrid[j][k];
        }
    }
}
