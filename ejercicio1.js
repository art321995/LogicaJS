
function tablaMultiplicar (numero) {
        
        let resultado = `Tabla del # ${numero}  \n`;

        for(let i = 1; i <= 10; i++) {
            let multiplicacion = (i * numero);
            resultado += `${i} x ${numero} = ${multiplicacion} \n`;
        };
        return resultado;
};

 alert (tablaMultiplicar (3)); 

console.log(tablaMultiplicar (3));