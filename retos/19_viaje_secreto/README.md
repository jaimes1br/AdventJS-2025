# Reto #19: 🎄 El viaje secreto de papá Noel

## Fácil 🟢  | Puntuación:  5⭐ Extra: 3⭐

¡El GPS del trineo se ha vuelto loco! 😱 Papá Noel tiene los **tramos de su viaje**, pero están todos desordenados.

Tu misión es **reconstruir la ruta completa** desde el origen hasta el destino final.

Ten en cuenta: **El primer elemento del array es siempre el primer tramo del viaje**. A partir de ahí, debes ir conectando los destinos con los siguientes orígenes.

🔎 **A tener en cuenta:**

* No hay rutas duplicadas ni ciclos en el camino de Papá Noel.
* Puede haber tramos que no pertenezcan a la ruta; estos deben ignorarse.

🧩 **Ejemplos**

```javascript
revealSantaRoute([
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
])
// → ['MEX', 'CAN', 'UK', 'GER']

revealSantaRoute([
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['CMX', 'HKN']
])
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

revealSantaRoute([
  ['STA', 'HYD'],
  ['ESP', 'CHN']
])
// → ['STA', 'HYD']
```

## Solución propuesta # 1 4⭐

```javascript
function revealSantaRoute(routes) {
    
    if(routes.length === 0) return [];
    
    const objRoutes = {};
    routes.forEach(route => {
        objRoutes[route[0]] = route[1];
    })

    const result = [routes[0][0],routes[0][1]];
    let key = result[1];
    const keys = Object.keys(objRoutes);

    for (let i = 1; i < routes.length; i++) {
        if(keys.includes(key)){
            const value = objRoutes[key]; 
            result.push(value);
            key = value;
        }else {
            break;
        }
    }

    return result;
} // 4⭐
```

## Solución propuesta # 2 5⭐

```javascript
function revealSantaRoute(routes) {
    
    if(routes.length === 0) return [];
    
    const objRoutes = {};
    routes.forEach(route => {
        objRoutes[route[0]] = route[1];
    })

    const result = [routes[0][0]];
    let key = result[0];
    const keys = Object.keys(objRoutes);

    while(keys.includes(key)){
        const value = objRoutes[key]; 
        result.push(value);
        key = value;

    }

    return result;
} // 5⭐
```
