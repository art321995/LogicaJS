

function censurado(texto=false, busqueda=false){
    
    let resultado = "";

    if(!texto && !busqueda){
        resultado= "No puede leer el texto y la busqueda ";
    }else if(!texto && busqueda){
        resultado= "No puede leer el texto";
    }else if(texto && !busqueda){
        resultado= "No puede hacer la busqueda ";
    }else if(texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda, 'gi'), "[-CENSURADO-]");
    }

    return resultado;

};

console.log(censurado("Hola hola Hola", "Hola"));