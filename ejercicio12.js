//Ejercicio de Resta de 8 en 8 hasta llegar a 0

function Resta(numero){

    let resultado = `--- Del ${numero} al 0 --- \n`;

    while(numero > 0){
        resultado += `- N. ${numero} \n`;
        numero -= 8;
    };

    if(numero <= 0){
        resultado += "- N. 0 \n";
    }

    resultado += "--- FIN ---";

    return resultado;
};

console.log(Resta(10));

