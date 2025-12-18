# Reto #13: 🏭 La cadena de montaje

## Medio 🟠  | Puntuación:  5⭐ Extra: 3⭐

Simula el recorrido de un regalo dentro de una fábrica y devuelve cómo termina. Para ello debes crear una función **``runFactory(factory)``**.

**``factory``** es un **``string[]``** donde cada celda puede ser:

* ``>`` ``<`` ``^`` ``v`` movimientos
* ``.`` salida correcta

Ten en cuenta que **todas las filas tienen la misma longitud** y que **no habrá otros símbolos.**

El regalo **siempre empieza en la posición (0,0)** (arriba a la izquierda). En cada paso lee la celda actual y se mueve según la dirección. Si llega a una celda con un punto (``.``) significa que ha salido correctamente de la fábrica.

**Resultado**

Devuelve uno de estos valores:

* **``'completed'``** si llega a un ``.``
* **``'loop'``** si visita una posición dos veces
* **``'broken'``** si sale fuera del tablero

🧩 **Ejemplos**

```javascript
runFactory([
  '>>.'
]) // 'completed'

runFactory([
  '>>>'
]) // 'broken'

runFactory([
  '>><'
]) // 'loop'

runFactory([
  '>>v',
  '..<'
]) // 'completed'

runFactory([
  '>>v',
  '<<<'
]) // 'broken'

runFactory([
  '>v.',
  '^..'
]) // 'completed'

runFactory([
  'v.',
  '^.'
]) // 'loop'
```

## Solución propuesta

```javascript
function runFactory(factory) {

    if (!factory || factory.length === 0) return 'broken';
    
    const limitX = factory.length;
    const limitY = factory[0].length;
    const visited = new Set();

    const moves = {
        '>': [0,1],
        '<': [0,-1],
        '^': [-1,0],
        'v': [1,0]
    }

    let cx = 0;
    let cy = 0;

    while(true) {

        const posKey = `${cx}${cy}`;
        if (visited.has(posKey)) return 'loop';
        visited.add(posKey);

        const step = factory[cx][cy];

        if(step === '.') return 'completed';

        const [nX,nY] = moves[step];
        cx += nX;
        cy += nY;


        if(cx < 0 || cy < 0 || cx >= limitX || cy >= limitY ) return 'broken';

    }
}
```
