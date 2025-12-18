# Reto #17: 🎄 El panel de luces navideñas

## Fácil 🟢  | Puntuación:  5⭐ Extra: 3⭐

En el Polo Norte han montado un **panel de luces navideñas** 🎄✨ para decorar el taller. Cada luz puede estar encendida con un color o apagada.

El panel se representa como una **matriz** donde cada celda puede ser:

* **``'.'``**→ luz apagada
* **``'R'``** → luz roja
* **``'G'``** → luz verde

Los elfos quieren saber si en el panel existe una **línea de 4 luces del mismo color** encendidas y **alineadas** (solo horizontal ↔ o vertical ↕). Las luces apagadas (**``'.'``**) no cuentan.

**Nota:** El tablero puede ser de cualquier tamaño. No hay diagonales.

🧩 **Ejemplos**

```javascript
hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
])
// true → hay 4 luces rojas en horizontal

hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
])
// true → hay 4 luces verdes en vertical

hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])
// false → no hay 4 luces del mismo color seguidas
```

## Solución propuesta

```javascript
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
}
```
