// Dado un numero sacarle su cuadrado hasta llegar a el

function cuadrado(numero){
    return numero*numero;
};

function mostrar(numero){
    for(let i = 0; i <= numero; i++){
        console.log(cuadrado(i));
    };
};

mostrar(10);