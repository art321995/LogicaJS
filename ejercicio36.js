

function cuentaLetras(texto){

    let consonantes = 0;
    let vocales = 0;
    let textoLimpio = "";

    textoLimpio = texto.split().filter(letra => /[üéáíóúñÑ\w]/gi.test(letra) && isNaN(letra)).join("");

    for(let letra of textoLimpio){
        if(/[éáíóúaeiou]/gi.test(letra)){
            vocales++;
        }else{
            consonantes++
        };
    };

    return [consonantes, vocales]
};

let letras = cuentaLetras("Hola mi nombre es Arturo Esqueda");

console.log("Consonates: ", letras[0]);
console.log("Vocales: ", letras[1]);
