# Reto #11: 📹 Regalos sin vigilancia

## Fácil 🟢  | Puntuación:  5⭐ Extra: 3⭐

El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber **qué regalos no tienen vigilancia**.

El almacén se representa como un array de strings (**``string[]``**), donde **cada regalo (``*``) está protegido si su posición está junto a una cámara (#). Cada espacio vacío se representa con un punto (``.``).**

Tu tarea es **contar cuántos regalos están sin vigilancia**, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

Ten en cuenta: solo se considera como *"adyacente" las 4 direcciones cardinales, no en diagonal.*

Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.

🧩 **Ejemplos**

```javascript
findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]) // ➞ 0

// Todos los regalos están junto a una cámara

findUnsafeGifts([
  '...',
  '.*.',
  '...'
]) // ➞ 1

// Este regalo no tiene cámaras alrededor

findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
]) // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
]) // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara
```

## Solución propuesta

```javascript
function findUnsafeGifts(warehouse) {
    const maxRow = warehouse.length;
    const maxCol = warehouse[0].length;
    const moves = [
        [-1,0],
        [1,0], 
        [0,-1],
        [0,1]
    ];
    let result = 0;

    for(let r = 0; r < maxRow; r++){
        for(let c = 0; c < maxCol; c++){
            const value = warehouse[r][c];
            
            if(value === '*'){
                let flag = true;
                moves.forEach(move => {
                    const [nx,ny] = move
                    let tx = r + nx;
                    let ty = c + ny;
                    if(tx >= 0 && ty >= 0 && tx < maxRow && ty < maxCol){
                        if(warehouse[tx][ty] === '#') flag = false; 
                    }
                })

                if(flag) result++ 
            }
        }
    }

    return result;
}
```
