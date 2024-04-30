

function calcularDias (dias){

    let anios = Math.floor(dias/365);
    let diasRestantes = (dias%365);
    let meses = Math.floor(diasRestantes/30);
    diasRestantes = diasRestantes%30;

    return `Equivale a ${anios} años, ${meses} meses y ${diasRestantes} dias.`

}

console.log(calcularDias(1278)) ;