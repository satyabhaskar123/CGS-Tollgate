const cells = document.querySelectorAll('[data-cell]');
let currentPlayer = 'X';
let board = Array(9).fill(null); // Array to track the state of the board

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6], // Diagonal from top-right to bottom-left
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Return the winner ('X' or 'O')
        }
    }
    
    return null; // No winner yet
}

function Click(e) {
    const cell = e.target;
    const index = Array.from(cells).indexOf(cell); // Get the index of the clicked cell

    // Prevent overwriting an already occupied cell
    if (cell.textContent !== '' || board[index] !== null) return;

    // Mark the cell for the current player
    cell.textContent = currentPlayer;
    board[index] = currentPlayer;

    // Check if there's a winner
    const winner = checkWinner();
    if (winner) {
        alert(`${winner} wins!`);
        resetBoard(); // Reset the board for a new game
        return;
    }

    // Switch player after the move
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetBoard() {
    board.fill(null); // Clear the board array
    for (const cell of cells) {
        cell.textContent = ''; // Clear the text from the cells
    }
    currentPlayer = 'X'; // Reset the first player to 'X'
}

// Add event listeners to all cells
for (const cell of cells) {
    cell.addEventListener('click', Click);
}
