function concidencias (frase, busqueda){

    let textoLimpio = frase.toLoweCase().replace(/[!.,-_]/gi, '');
    let resultado = 0;

    if(textoLimpio.includes(busqueda)){

        let palabras = textoLimpio.split(" ");
        let mapa = {};

        for(let palabra of palabras){

            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda];
    }else{
        resultado = 0;
    };
    return resultado;
};

console.log("Numeros de coincidencias en la frase son: ", concidencias("Hol soy arturo, arturo, arturo", "arturo"));
