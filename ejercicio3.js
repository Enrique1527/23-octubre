const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa una lista de 'perros' y 'gatos', separados por espacios: ", (animales) => {
  const animalesArray = animales.split(" ");
  const perros = animalesArray.filter(animal => animal.toLowerCase() === 'perro');
  const gatos = animalesArray.filter(animal => animal.toLowerCase() === 'gato');

  console.log("Perros: " + perros.join(", "));
  console.log("Gatos: " + gatos.join(", "));
  rl.close();
});