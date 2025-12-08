# Reto #8: 🎁 Encuentra el regalo único

## Fácil 🟢  | Puntuación:  5⭐ Extra: 3⭐

Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.

Escribe una función que reciba un **``string``** y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

Si no hay ninguna, devuelve una cadena vacía ("").

🧩 **Ejemplos**

```javascript
findUniqueToy('Gift') // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

findUniqueToy('sS') // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

findUniqueToy('reindeeR') // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
findUniqueToy('AaBbCc') // ''
findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaAaAF') // 'F'
findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'
```

## Solución propuesta #1 4⭐

```javascript
function findUniqueToy(toy) {

    let reviewed = ''
    for (let i = 0; i < toy.length; i++) {
        const l = toy[i].toLowerCase();
        const rest = toy.slice(i+1,).toLowerCase();

        if(!rest.includes(l) && !reviewed.includes(l)) return toy[i];

        reviewed += l
    }


    return ''
}
```

## Solución propuesta #2 5⭐

```javascript
function findUniqueToy(toy) {
    const values = {};
    for (let i = 0; i < toy.length; i++) {
        const l = toy[i].toLowerCase();

        if(!values[l]) values[l] = 1
        else values[l]++
    }

    for(let opc in values){
        if(values[opc] === 1){
            const i = toy.toLowerCase().indexOf(opc)
            return toy[i]

        }
    }

    return ''
}
```

---
