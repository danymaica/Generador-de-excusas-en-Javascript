// Arrays con partes de la excusa
let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi papá'];
let action = ['se comió', 'orinó en', 'rompió', 'aplastó'];
let what = ['mi tarea', 'mi celular', 'el coche', 'la computadora'];
let when = ['antes de clase', 'mientras dormía', 'durante el almuerzo', 'cuando estaba rezando'];

// Función para generar excusa
function generarExcusa() {
  let parte1 = who[Math.floor(Math.random() * who.length)];
  let parte2 = action[Math.floor(Math.random() * action.length)];
  let parte3 = what[Math.floor(Math.random() * what.length)];
  let parte4 = when[Math.floor(Math.random() * when.length)];

  return `${parte1} ${parte2} ${parte3} ${parte4}`;
}

// Al cargar la página, genera y muestra una excusa
window.onload = function () {
  const excusaElemento = document.getElementById('excuse');
  excusaElemento.innerHTML = generarExcusa();
};
