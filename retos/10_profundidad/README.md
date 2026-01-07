# Reto #10: 📨 Profundidad de la magia navideña

## Fácil 🟢 | Puntuación:  5⭐ Extra: 3⭐

🎄 Profundidad de Magia Navideña

En el Polo Norte, Santa Claus está revisando las cartas mágicas 📩✨ que recibe de los niños de todo el mundo. Estas cartas usan un antiguo lenguaje navideño en el que los corchetes **``[``** y **``]``** representan la intensidad del deseo.

Cuanto más profunda sea la anidación de los corchetes, más fuerte es el deseo. Tu misión es averiguar la **máxima profundidad** en la que se anidan los **``[]``**.

Pero ¡cuidado! Algunas cartas pueden estar **mal escritas**. Si los corchetes no están correctamente balanceados (si se cierra antes de abrir, sobran cierres o faltan cierres), la carta es inválida y debes devolver **``-1``**.

🧩 **Ejemplos**

```javascript
maxDepth('[]') // -> 1
maxDepth('[[]]') // -> 2
maxDepth('[][]') // -> 1
maxDepth('[[][]]') // -> 2
maxDepth('[[[]]]') // -> 3
maxDepth('[][[]][]') // -> 2

maxDepth('][') // -> -1 (cierra antes de abrir)
maxDepth('[[[') // -> -1 (faltan cierres)
maxDepth('[]]]') // -> -1 (sobran cierres)
maxDepth('[][][') // -> -1 (queda uno sin cerrar)

```

## Solución propuesta

```javascript
function maxDepth(s) {
let deep_max = 0;
    let deep_curr = 0;
    let bal = 0; 

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '[') {
            deep_curr++;
            bal++;
            if (deep_curr > deep_max) {
                deep_max = deep_curr;
            }
        } else if (char === ']') {
            deep_curr--;
            bal--;

            if (deep_curr < 0) {
                return -1;
            }
        }
    }

    if (bal !== 0) {
        return -1;
    }

    return deep_max;
}
```
