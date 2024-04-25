

function elementosComunes(array1, array2){

    const filtrado = array1.filter(elemento => {
        return array2.includes(elemento);
    });

    console.log(filtrado);
}

elementosComunes([1,2,3,4],[1,2,3,5]);