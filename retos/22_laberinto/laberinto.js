/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
   const rows = maze.length;
    const cols = maze[0].length;
    let start = null;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 'S') {
                start = [i, j];
                break;
            }
        }
        if (start) break;
    }

    const queue = [start];
    const visited = new Set();
    visited.add(`${start[0]},${start[1]}`);

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length > 0) {
        const [r, c] = queue.shift();

        if (maze[r][c] === 'E') return true;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nr < rows && 
                nc >= 0 && nc < cols && 
                maze[nr][nc] !== '#' && 
                !visited.has(`${nr},${nc}`)
            ) {
                visited.add(`${nr},${nc}`);
                queue.push([nr, nc]);
            }
        }
    }

    return false;
}

module.exports = canEscape