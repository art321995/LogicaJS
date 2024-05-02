//Dado un array de string, devolver otro con los valores que esten formados por mas de dos palabras

function dosPalabras(elementos){

    let nuevosElementos = [];

    for(palabra of elementos){
        if(palabra.split(' ').length >= 2){
            nuevosElementos.push(palabra);
        };
    };
    return nuevosElementos;
};

console.log(dosPalabras(["Hola mundo", "Arturo", "Esqueda Morales"]));