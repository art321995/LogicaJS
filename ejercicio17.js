// Ejercicio que muestra buzz en multiplo de 3 -- lightyear en multiplo de 5 y BuzzLightyear en multiplos de 5 y 3

function buzz (numero){

    let resultado = 0;

    if(numero % 3 === 0 && numero % 5 === 0){
        resultado = "BuzzLightyear"
    }else if (numero % 3 === 0){
        resultado = "Buzz";
    }else if(numero % 5 === 0){
        resultado = "lightyear"
    }else{
        return numero
    }

    return resultado;
};

function imprimir(numero){
    for(let i = 1; i <= numero; i++){
        console.log(buzz(i));
    }
};

imprimir(20);
