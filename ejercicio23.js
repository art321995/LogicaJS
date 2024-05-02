//Coloca la primera letra en mayusculas

function mayusculas(texto){
    let resultado = "";
    
    for(letra in texto){
        if(texto[letra - 1]===" " || parseInt(letra) === 0){
            resultado += texto[letra].toUpperCase();
        }else{
            resultado += texto[letra];
        }
    }


    return resultado;
}

console.log(mayusculas("hola soy arturo esqueda"));