
function mayusMinus(texto){

    let mayusculas = "";
    let minisculas = "";
    let resultado = "";

    for (letra of texto){

        if(/[A-Z]/.test(letra)){
            mayusculas ++;

        }else{
            minisculas ++;
        }
    }
    
    if(mayusculas > minisculas){
        resultado = texto.toUpperCase();
    }else{
        resultado = texto.toLowerCase();
    }

    return resultado;
}

console.log(mayusMinus("Arturo ESqueda"));