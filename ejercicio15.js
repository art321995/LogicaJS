

function masUsado(texto){

    let mapeo = {};
    let maximo_repeticiones = 0;
    let letra_mas_repetida = "";

    for(let letra of texto){

        if (!mapeo [letra]){
            mapeo[letra] = 1;
        }else{
            mapeo[letra]++;
        };       
    };

    for(let letra in mapeo){
        if(mapeo[letra]>maximo_repeticiones){
            maximo_repeticiones = mapeo[letra];
            letra_mas_repetida = letra;
        };
    };

    return letra_mas_repetida;

};

console.log("La letras mas repetida es: ",masUsado("MextliAmneris"));