//Obtener numero de vocales

function vocales (texto){

    let coincidencias = texto.match(/[aeiou]/gi);

    return coincidencias ? coincidencias.length : 0;

};

console.log("Numero de vocales: ", vocales("rtrSQD"));