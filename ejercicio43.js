// Dado un array de numeros, sacara la media de todos ellos

function laMedia(numeros){

    let suma = numeros.reduce((valorAcumulado, numeroActual) => {
        return valorAcumulado + numeroActual;
    });

    let media = suma / numeros.length;

    return media;
};

console.log(laMedia([1,2,3,4,5]));

