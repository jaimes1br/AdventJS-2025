# Reto #12: ⚔ Batalla de elfos

## Medio 🟠  | Puntuación:  5⭐ Extra: 3⭐

Dos elfos están jugando una batalla por turnos. Cada uno tiene un mazo de movimientos que se representan como un **``string``** donde cada carácter es una acción.

* **``A``** **Ataque normal:** causa 1 punto de daño si no es bloqueado
* **``B``** **Bloqueo:** bloquea un ataque normal (**``A``**)
* **``F``** **Ataque fuerte:** causa 2 puntos de daño, no puede ser bloqueado

Ambos elfos comienzan con **3 puntos de vida**. El primer elfo que llegue a **0 puntos de vida o menos pierde** y la batalla termina inmediatamente (no se siguen procesando más movimientos).

**Reglas por ronda**

* Si ambos usan ataque (**``A``** o **``F``**), ambos reciben daño según el tipo.
* **``B``** bloquea **``A``**, **pero no bloquea ``F``**.
* Todo se resuelve **simultáneamente**.

**Tu tarea**

Devuelve el resultado de la batalla como un número:

* **``1``** → si el Elfo 1 gana
* **``2``** → si el Elfo 2 gana
* **``0``** → si empatan (ambos llegan a 0 a la vez o terminan con la misma vida)

🧩 **Ejemplos**

```javascript
elfBattle('A', 'B')
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

elfBattle('F', 'B')
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

elfBattle('AAB', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

elfBattle('AFA', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

elfBattle('AFAB', 'BBAF')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

elfBattle('AA', 'FF')
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2
```

## Solución propuesta 5⭐

```javascript
function elfBattle(elf1, elf2) {
  
    let l1 = 3;
    let l2 = 3;
    // Move outcomes: key = elf1Move + elf2Move, value = [elf1 health change, elf2 health change]
    const moves = {
        AA: [-1,-1],
        AB: [0,0],
        AF: [-2,-1],
        BA: [0,0],
        BB: [0,0],
        BF: [-2,0],
        FA: [-1,-2],
        FB: [0,-2],
        FF: [-2,-2],
    }

    for (let i = 0; i < elf1.length; i++) {
        const m = elf1[i] + elf2[i];
        const [v1,v2] = moves[m];
        l1 += v1;
        l2 += v2;

        if(l2 > 0 && l1 <= 0) return 2;
        if(l1 > 0 && l2 <= 0) return 1;
    }

    if(l1 > l2) return 1;
    if(l2 > l1) return 2;
    return 0
}
```

---
