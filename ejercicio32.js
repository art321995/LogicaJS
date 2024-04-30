//Array elevado al cuadrado y elminar cualquier cosa que no sea un numero

function alCuadrado(numeros){

    let numeroCuadrados = numeros
                            .filter(numero => typeof numero === "number")
                            .map(numero => Math.pow(numero, 2));

    return numeroCuadrados;
}

console.log(alCuadrado([12]));