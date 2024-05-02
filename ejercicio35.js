
function primeroUltimo(elementos){

    let nuevosElementos = [];
    nuevosElementos.push(elementos[0], elementos[elementos.length - 1]);

    return nuevosElementos;
};

console.log(primeroUltimo([1,2,3,4,5]));

