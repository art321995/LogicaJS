// Dado un array y devolver el numero mas alto y el mas bajo

function altoBajo(numeros){

    let ordenados = numeros.sort((a,b) => a-b);

    return {
        bajo: ordenados[0],
        alto: ordenados[ordenados.length - 1]
    };
};

console.log(altoBajo([1,33,56,99,23]));