# Reto #16: 🎁 Empaquetando regalos para santa

## Fácil 🟢  | Puntuación:  5⭐ Extra: 3⭐

Santa quiere repartir regalos de la forma **más eficiente posible** 🎁. Tiene una lista de regalos, cada uno con un **peso**, y un trineo que solo puede cargar hasta un **peso máximo**.

Los regalos se entregan **en orden**, y Santa no puede cambiar ese orden. Cuando un regalo no cabe en el trineo actual, Santa envía el trineo y prepara uno nuevo.

Tu tarea es escribir una función que calcule el **número mínimo de trineos necesarios** para entregar todos los regalos.

Eso sí, ten en cuenta que a veces hay un regalo que no cabe en el trineo, entonces hay que devolver **``null``** porque ese trineo no sirve para ese pack de regalos.

🧩 **Ejemplos**

```javascript
packGifts([2, 3, 4, 1], 5)
// 2 trineos
// Trineo 1: 2 + 3 = 5
// Trineo 2: 4 + 1 = 5

packGifts([3, 3, 2, 1], 3)
// 3 trineos
// Trineo 1: 3
// Trineo 2: 3
// Trineo 3: 2 + 1 = 3

packGifts([1, 1, 1, 1], 2)
// 2 trineos
// Trineo 1: 1 + 1 = 2
// Trineo 2: 1 + 1 = 2

packGifts([5, 6, 1], 5)
// null
// Hay un regalo de peso 6 que no cabe

packGifts([], 10)
// 0 trineos
// No hay regalos que entregar
```

## Solución propuesta #1 4 ⭐

```javascript
function packGifts(gifts, maxWeight) {

    if(gifts.length === 0) return 0;

    const max = Math.max(...gifts);
    if(max > maxWeight) return null;
    
    let sleighs = 0;
    let currentSleighWeight = 0;
    gifts.forEach(gift => {
        const currentCount = currentSleighWeight + gift;

        if(currentCount < maxWeight) {
            currentSleighWeight += gift;
        }

        if(currentCount === maxWeight){
            sleighs++;
            currentSleighWeight = 0;
        }

        if(currentCount > maxWeight){
            sleighs++;
            currentSleighWeight = gift;
        }
    });

    if(currentSleighWeight > 0) sleighs++;

    return sleighs;
} // 4⭐
```

## Solución propuesta #2 5 ⭐

```javascript
function packGifts(gifts, maxWeight) {

    if(gifts.length === 0) return 0;

    const max = Math.max(...gifts);
    if(max > maxWeight) return null;
    
    let sleighs = 0;
    let currentSleighWeight = 0;
    gifts.forEach(gift => {
        if (currentSleighWeight + gift <= maxWeight) {
            currentSleighWeight += gift;
        } else {
            sleighs++;
            currentSleighWeight = gift;
        }
    });

    if(currentSleighWeight > 0) sleighs++;

    return sleighs;
} // 5⭐
```
