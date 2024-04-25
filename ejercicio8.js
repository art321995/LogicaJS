
function invertirNumero(numero){

    let invertido = parseInt(numero.toString() .split('') .reverse() .join('')) * Math.sign(numero);
    return invertido
}

console.log("El numero invertido es: ", invertirNumero(-227));