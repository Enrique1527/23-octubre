function calcularEstadisticas(numeros) {
    if (numeros.length === 0) {
        return {
            max: null,
            min: null,
            promedio: null,
            mediana: null,
            suma: null
        };
    }

    const suma = numeros.reduce((acc, num) => acc + num, 0);
    const max = Math.max(...numeros);
    const min = Math.min(...numeros);
    const promedio = suma / numeros.length;

    const numerosOrdenados = [...numeros].sort((a, b) => a - b); //ordena los numeros de forma ascendente
    let mediana;

    if (numerosOrdenados.length % 2 === 0) {
        const mediana1 = numerosOrdenados[numerosOrdenados.length / 2 - 1];
        const mediana2 = numerosOrdenados[numerosOrdenados.length / 2];
        mediana = (mediana1 + mediana2) / 2;
    } else {
        mediana = numerosOrdenados[Math.floor(numerosOrdenados.length / 2)];
    }

    return {
        max: max,
        min: min,
        promedio: promedio,
        mediana: mediana,
        suma: suma
    };
}

const listaNumeros = [5, 3, 8, 6, 2,7,7,8,8,9,2,1,4,36,45,-8,600];
const estadisticas = calcularEstadisticas(listaNumeros);
console.log(estadisticas);

console.log(typeof true);
console.log(typeof "Hola");