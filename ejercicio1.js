const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa los valores separados por espacios: ", (valores) => {
  const valoresArray = valores.split(" ");
  
  rl.question("¿Qué valor deseas averiguar si existe? ", (valorABuscar) => {
    if (valoresArray.includes(valorABuscar)) {
      console.log("El valor " + valorABuscar + " se encuentra en la lista.");
    } else {
      console.log("El valor " + valorABuscar +  " NO se encuentra en la lista.");
    }
    rl.close();
  });
});