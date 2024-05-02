//Muestra las operaciones de dos numeros

function calculadore(num1, num2){

    let resultado = `
        La suma es: ${num1 + num2}
        La resta es: ${num1 - num2}
        La multiplicacion es: ${num1 * num2}
        La division es: ${num1 / num2}  
    `;

    return resultado;
};

console.log(calculadore (8,4));