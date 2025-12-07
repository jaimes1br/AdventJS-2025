# Reto #6: 🧤 Emparejando guantes

## Fácil 🟢  | Puntuación:  5⭐ Extra: 3⭐

En el taller de Santa, los elfos han encontrado **una montaña de guantes mágicos** totalmente desordenados. Cada guante viene descrito por dos valores:

* **``hand``**: indica si es un guante izquierdo (**``L``**) o derecho (**``R``**)
* **``color``**: el color del guante (string)

Tu tarea es ayudarles a **emparejar guantes**: Un par válido es un guante izquierdo y uno derecho **del mismo color**.

Debes devolver **una lista con los colores de todos los pares encontrados.** Ten en cuenta que **puede haber varios pares del mismo color**. El orden se determina por el que se pueda hacer primero el par.

🧩 **Ejemplos**

```javascript
const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []

const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

matchGloves(gloves4)
// ['red', 'green']
```

## Solución propuesta 8⭐

```javascript
function matchGloves(gloves) {
    const waiting = {}; 
    const result = []; 

    for (const g of gloves) {
        const c = g.color;
        const hand = g.hand;
        const handO = (hand === 'L' ? 'R' : 'L');

        if (!waiting[c]) {
            waiting[c] = { L: 0, R: 0 };
        }

        if (waiting[c][handO] > 0) {
            waiting[c][handO]--; 
            
            result.push(c); 
            
        } else {
            waiting[c][hand]++;
        }
    }

    return result;
}
```

---
