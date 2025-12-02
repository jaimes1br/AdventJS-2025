# Reto #2: 🏭 Fabrica los juguetes

## Fácil 🟢  | Puntuación:  8⭐

La fábrica de Santa ha empezado a recibir la **lista de producción** de juguetes.
Cada línea indica **qué juguete** hay que fabricar y **cuántas unidades**.

Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.

Tienes una lista de objetos con esta forma:

* **toy**: el nombre del juguete (string)
* **quantity**: cuántas unidades hay que fabricar (number)

Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:

Cada juguete repetido tantas veces como indique **quantity**
En el mismo orden en el que aparecen en la lista original
Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)

🧩 Ejemplos

```javascript
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []
```

## Solución propuesta

```javascript
function manufactureGifts(giftsToProduce) {
    let result = [];

    giftsToProduce.forEach(gift => {
        if(gift.quantity > 0){
            for(let i = 0; i < gift.quantity; i++){
                result.push(gift.toy);
            }        
        }
    })

    return result;
}
```

---
