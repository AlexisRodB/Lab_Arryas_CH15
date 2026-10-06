// ============================================================
// Ejercicio 01 · Acceso a un plato
// ============================================================
// En Fogón Andino el menú es un array de objetos. Cada plato tiene:
//   { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false }
//
// Crea la función describirPlato(menu, posicion) que retorne
// un texto con el nombre y el precio del plato en esa posición,
// con este formato exacto:  "Ajiaco · $28000"
//
// Regla: si en esa posición no hay plato, retorna exactamente
// "Ese plato no existe" (sin pedirle .nombre a undefined).
//
// Ejemplos (con el menú del README):
//   describirPlato(menu, 0)  → "Bandeja paisa · $32000"
//   describirPlato(menu, 1)  → "Ajiaco · $28000"
//   describirPlato(menu, 9)  → "Ese plato no existe"
//
// Pista: primero guarda menu[posicion] en una variable y
// pregunta si es undefined, como en describirCurso de la clase.
// ============================================================

function describirPlato(menu, posicion) {
  // Tu código aquí
  const plato = menu[posicion];

  if (plato === undefined) {
    return "Ese plato no existe";
  }
  return `${plato.nombre} · $${plato.precio}`;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { describirPlato };

//
