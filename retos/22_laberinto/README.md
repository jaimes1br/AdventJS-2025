# Reto #22: 🎄 El laberinto del trineo

## Difícil 🔴  | Puntuación:  5⭐ Extra: 2⭐

Papá Noel 🎅 está probando un nuevo **simulador de trineo** dentro de un laberinto en el taller. El laberinto se representa como una matriz de caracteres.

Tu tarea es implementar una función que determine si es posible llegar a la salida (**``E``**) partiendo desde la posición inicial (**``S``**).

**Reglas del laberinto:**

* **``S``**: Posición inicial de Santa.
* **``E``**: Salida del laberinto.
* **``.``**: Camino libre.
* **``#``**: Pared (bloquea el paso).
* Movimientos permitidos: **arriba, abajo, izquierda y derecha**.
* Solo hay una **``S``** y una sola **``E``**.

**A tener en cuenta:**

* No necesitas devolver el camino, solo si es posible llegar.
* Santa no puede salir de los límites del laberinto.

**Consejo:** Este problema se puede resolver de varias formas, pero algoritmos de búsqueda como **BFS** (búsqueda en anchura) o **DFS** (búsqueda en profundidad) son ideales para este tipo de retos.

🧩 **Ejemplos**

```javascript
canEscape([
  ['S', '.', '#', '.'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['#', '#', '#', 'E']
])
// → true

canEscape([
  ['S', '#', '#'],
  ['.', '#', '.'],
  ['.', '#', 'E']
])
// → false

canEscape([['S', 'E']])
// → true

canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E']
])
// → true

canEscape([
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E']
])
// → false
```

## Solución propuesta

```javascript
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
```
