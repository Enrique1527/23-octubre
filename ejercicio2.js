const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Numero de manzanas: ", manzanas =>{
    rl.question("Numero de peras: ", peras =>{
        rl.question("Numero de duraznos: ", duraznos =>{
            console.log("El valor numero de manzanas es: " +manzanas);
            console.log("El valor numero de peras es: " +peras);
            console.log("El valor numero de duraznos es: " +duraznos);
            rl.close();
        });
    });
});
