# Reto #20: 🎁 El almacén vertical

## Fácil 🟢  | Puntuación:  5⭐ Extra: 3⭐

En el taller de Santa, los elfos están guardando regalos 🎁 en un **almacén vertical**. Los regalos se dejan caer uno a uno por una columna y se van apilando.

El almacén es una matriz con **``#``** regalos y **``.``** espacios vacíos. Debes crear una función **``dropGifts``** que reciba el estado del almacén y un array con las columnas donde se dejan caer los regalos.

## Reglas de la caída

* El regalo cae por la columna indicada desde arriba.
* Se coloca en la **celda vacía (``.``) más baja** de esa columna.
* Si la columna está llena, el regalo se ignora.

🧩 **Ejemplos**

```javascript
dropGifts(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.']
  ],
  [0]
)
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2]
)
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/

dropGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ],
  [0, 1, 2]
)
/*
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
*/

dropGifts(
  [
    ['#', '#']
    ['#', '#']
  ],
  [0, 0]
)
/*
[
  ['#', '#']
  ['#', '#']
]
```

## Solución propuesta

```javascript
function dropGifts(warehouse, drops) {
    const limit = warehouse.length ;
    const newWarehouse = [...warehouse];

    drops.forEach(drop => {       
        for (let i = limit; i > 0; i--) {
            if(newWarehouse[i-1][drop] === '.'){
                newWarehouse[i-1][drop] = '#';
                break;
            }
        }
    })
  
    return newWarehouse;
}
```
