console.log(hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
]))
// true

console.log(hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
]))
// true

console.log(hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
]))
// false
/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
    const rows = board.length;
    const cols = board[0].length;

    const directions = [
        [0, 1],
        [1, 0], 
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            
            if(board[r][c] === '.') continue;

            for(const [dr,dc] of directions){
                let count = 1;

                for (let i = 1; i < 4; i++) {
                    const tempR = r + dr * i;                
                    const tempC = c + dc * i;

                    if(tempR >= 0 && tempC >= 0 && 
                        tempR < rows && tempC < cols &&
                        board[tempR][tempC] === board[r][c]
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
} //5 ⭐


module.exports = hasFourLights