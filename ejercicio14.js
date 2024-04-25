//Repite el texto!


function repiteme(texto, numero){

    let resultado = "";

    for(i=0; i < numero; i++){
        resultado += texto;
    };

    return resultado;

};

console.log(repiteme("arturo ", 4));

