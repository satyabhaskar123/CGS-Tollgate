const cells = document.querySelectorAll('[data-cell]');
let currentPlayer = 'X';
let board = Array(9).fill(null); 

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6], 
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    
    return null; 
}

function Click(e) {
    const cell = e.target;
    const index = Array.from(cells).indexOf(cell);

    
    if (cell.textContent !== '' || board[index] !== null) return;

    
    cell.textContent = currentPlayer;
    board[index] = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        alert(`${winner} wins!`);
        resetBoard(); 
        return;
    }

    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetBoard() {
    board.fill(null); 
    for (const cell of cells) {
        cell.textContent = ''; 
    }
    currentPlayer = 'X'; 
}

// Add event listeners to all cells
for (const cell of cells) {
    cell.addEventListener('click', Click);
}
