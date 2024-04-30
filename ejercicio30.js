

function eliminarDuplicado(elementos){

    elementos = elementos.filter(elemento => {
        return typeof elemento ===  "number";
    });

    let sinDuplicados = new Set(elementos);

    return Array.from(sinDuplicados);

};

console.log(eliminarDuplicado(["uno", "dos", 1,1,2,3,3,4,4,5,5,"Arturo",6678]));
