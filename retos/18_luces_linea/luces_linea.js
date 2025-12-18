console.log(hasFourInARow([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])) // false

console.log(hasFourInARow([
  ['R', 'R', 'R', 'R'],
  ['G', 'G', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.']
])) // true

console.log(hasFourInARow([
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R']
])) // true

console.log(hasFourInARow([
  ['.', '.', '.', 'G'],
  ['.', '.', 'G', '.'],
  ['.', 'G', '.', '.'],
  ['G', '.', '.', '.']
])) // true
/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
    const rows = board.length;
    const cols = board[0].length;

    const directions = [
        [0, 1],
        [1, 0],
        [1, 1],
        [1, -1] 
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const ligth = board[r][c];
            
            if(ligth === '.') continue;

            for(const [dr,dc] of directions){
                let count = 1;

                for (let i = 1; i < 4; i++) {
                    const tempR = r + dr * i;                
                    const tempC = c + dc * i;

                    if(tempR >= 0 && tempC >= 0 && 
                        tempR < rows && tempC < cols &&
                        board[tempR][tempC] === ligth
                    ){
                        count++
                    }else{
                        break;
                    }
                }

                if(count === 4) return true;
            }
            

        }
    }

    return false;
} //5⭐


// function hasFourInARow(board) {
     
//     let result = false;
//     const lx = board.length;
//     const ly = board[0].length;

//     for (let x = 0; x < board.length; x++) {
//         for (let y = 0; y < board[x].length; y++) {
//             const u = [[x-1,y],[x-2,y],[x-3,y]];
//             const ur = [[x-1,y+1],[x-2,y+2],[x-3,y+3]];
//             const r = [[x,y+1],[x,y+2],[x,y+3]];
//             const rd = [[x+1,y+1],[x+2,y+2],[x+3,y+3]];
//             const d = [[x+1,y],[x+2,y],[x+3,y]];
//             const opts = [u, ur, r, rd, d];            
            
//             if(board[x][y] !== '.'){
//                 const ligth = board[x][y];
//                 opts.forEach(opt => {
//                     let count = 1;
//                     opt.forEach(value => {
//                         const [tx,ty] = value;
//                         if(tx >= 0 && ty >= 0 && tx < lx && ty < ly){
//                             if(board[tx][ty] === ligth) count++ 
//                         }
//                     })

//                     if(count === 4) result = true;
//                 });
//             }       
//         }
//     }

//     return result;
// } // 3⭐

module.exports = hasFourInARow;