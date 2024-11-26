function  initializeChessboard() {
    // Container for board
    const chessboard = document.createElement('div');
    chessboard.classList.add('chessboard');
    document.body.appendChild(chessboard); //Add on page

    let lastClickedCell = null; //Last pressed cell

    //Create 64 cells
    for (let row =1; row<=8; row++) {
        for (let col=1; col<=8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.id = `square-${row}-${col}`;

            //set the cell color
            if ((row+col)%2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }

            //click event
            square.addEventListener('click', () => {
                if (lastClickedCell) {
                    lastClickedCell.classList.remove('highlighted');
                }
                if (lastClickedCell !== square) {
                    square.classList.add('highlighted');
                    lastClickedCell = square;
                } else {
                    lastClickedCell = null;
                }
                
            });
            chessboard.appendChild(square);
            console.log(square);
        }
    }
}

initializeChessboard();