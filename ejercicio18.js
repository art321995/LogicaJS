// Numero diviores de un numero dado

function divisores(numero, posibleDivisor){


    if(numero%posibleDivisor === 0){
        return posibleDivisor;
    }

    return 0;

};

function mostrarDivisores (numero){
    for(let i = 1; i <= numero; i++){
        let esDivisor = divisores(numero, i);

        if(esDivisor) console.log(esDivisor)
    };
};

mostrarDivisores(20);