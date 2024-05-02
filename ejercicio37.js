

function elQueMasAparece(datos){
     
    let mapeo = {},
        masFrecuente = "",
        valosMasFrecuente = 0;


    if(typeof datos === "string"){
        datos = datos.split(" ");
    };


    for (let elemento of datos){

        if(mapeo[elemento]){
            mapeo[elemento]++;

        }else{
            mapeo[elemento] = 1;
        };
    };

    for(let elemento in mapeo){
        if(mapeo[elemento] > valosMasFrecuente){

            valosMasFrecuente = mapeo[elemento];
            masFrecuente = elemento;
        };
    };

    return {
        "masFrecuente" : masFrecuente,
        "valorMasFrecuente" : valosMasFrecuente
    };
};

console.log(elQueMasAparece([1,1,1,1,4,5,5])) ;
console.log(elQueMasAparece(["Arturo Arturo Esqueda Morales"]));

