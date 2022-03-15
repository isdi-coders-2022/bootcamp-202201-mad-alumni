export const checkColumns = (firstCell, secondCell) => {
    if (
        firstCell.column === secondCell.column &&
        (firstCell.row - secondCell.row === 1 ||
            firstCell.row - secondCell.row === -1 ||
            firstCell.row - secondCell.row === 19 ||
            firstCell.row - secondCell.row === -19)
    ) {
        return true;
    }
    return false;
};

export const checkRows = (firstCell, secondCell) => {
    if (
        firstCell.row === secondCell.row &&
        (firstCell.column - secondCell.column === 1 ||
            firstCell.column - secondCell.column === -1 ||
            firstCell.column - secondCell.column === 19 ||
            firstCell.column - secondCell.column === -19)
    ) {
        return true;
    }
    return false;
};

export const checkDiagonal = (firstCell, secondCell) => {
    if (
        (firstCell.row - secondCell.row === 1 ||
            firstCell.row - secondCell.row === -1 ||
            firstCell.row - secondCell.row === 19 ||
            firstCell.row - secondCell.row === -19) &&
        (firstCell.column - secondCell.column === 1 ||
            firstCell.column - secondCell.column === -1 ||
            firstCell.column - secondCell.column === 19 ||
            firstCell.column - secondCell.column === -19)
    ) {
        return true;
    }
    return false;
};
