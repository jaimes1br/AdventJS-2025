# Reto #9: 🦌 El reno robot aspirador

## Difícil 🔴  | Puntuación:  5⭐ Extra: 3⭐

Los elfos han construido un **reno 🦌 robot aspirador** (**``@``**) para limpiar un poco el taller de cara a las navidades.

El reno se mueve sobre un tablero para **recoger cosas del suelo (``*``) y debe evitar obstáculos (``#``).**

Recibirás dos parámetros:

* **``board``**: un **``string``** que representa el tablero.
* **``moves``**: un **``string``** con los movimientos: **``'L'``** (izquierda), **``'R'``** (derecha), **``'U'``** (arriba), **``'D'``** (abajo).

**Reglas del movimiento:**

* Si el reno **recoge algo del suelo** (**``*``**) durante los movimientos → devuelve **``'success'``**.
* Si el reno se **sale del tablero** o **choca contra un obstáculo** (**``#``**) → devuelve **``'crash'``**.
* Si el reno **no recoge nada ni se estrella** → devuelve **``'fail'``**.

Ten en cuenta que si el reno **recoge algo del suelo**, ya es **``'success'``**, indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

**Importante:** Ten en cuenta que en el **``board``** la primera y última línea están en blanco y deben descartarse.

🧩 **Ejemplos**

```javascript
const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// ➞ 'fail' -> se mueve pero no recoge nada

moveReno(board, 'U')
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, 'RU')
// ➞ 'crash' -> choca contra un obstáculo (#)

moveReno(board, 'RRRUU')
// ➞ 'success' -> recoge algo (*)

moveReno(board, 'DD')
// ➞ 'crash' -> se choca con la parte de abajo del tablero

moveReno(board, 'UUU')
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

moveReno(board, 'RR')
// ➞ 'fail' -> se mueve pero no recoge nada

```

## Solución propuesta #1 4⭐

```javascript
function moveReno(board, moves) {
  
    const temp = board.split('\n');
    temp.pop();
    temp.shift()

    let newBoard = [];
    let pos = { x: 0, y: 0 };

    for (let i = 0; i < temp.length; i++) {
        if(temp[i].includes('@')){
            let y = temp[i].indexOf('@');
            pos.x = i;
            pos.y = y;
        }

        newBoard.push(temp[i].split(''));        
    }

    const opts = { D: 1, U: -1, L: -1, R: 1} ;

    for(let m of moves){
        if(m === 'D' || m === 'U' ){
            pos.x += opts[m];
        }else{
            pos.y += opts[m];
        }

        if(!newBoard[pos.x] || !newBoard[pos.x][pos.y] || newBoard[pos.x][pos.y] === '#' ){
            return 'crash'
        }

        if(newBoard[pos.x][pos.y] === '*'){
            return 'success'
        }

    }

    return 'fail';
} // 4 ⭐

```

## Solución propuesta #2 5⭐

```javascript
  
    const nb = board.slice(1, -1).split('\n');
    let row, line;

    for(const [i,l] of nb.entries()){
        const index = l.indexOf('@');
        if(index !== -1){
            row = i;
            line = index;
            break;
        }
    }
    
    for(let m of moves){
        const opts = {
            'U': [row - 1, line],
            'D': [row + 1, line],
            'R': [row, line + 1],
            'L': [row, line - 1],
        }

        const [newr,newl] = opts[m];

        if(!nb[newr] || !nb[newr][newl] || nb[newr][newl] === '#' ){
            return 'crash'
        }

        if(nb[newr][newl] === '*'){
            return 'success'
        }

        row = newr;
        line = newl;
    }

    return 'fail';
```

---
