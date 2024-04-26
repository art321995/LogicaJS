// Devulve el numero mayor y el numero menor

function mayorMenor(num1, num2){

    let resultado = "";

    if (num1 === num2){
        resultado = "Los numeros son iguales"
    }else if(num1 > num2){
        resultado = "El numero mayor es: " + num1 + "\n"
        resultado += "El numero menor es: " + num2 ;
    }else if(num1 < num2 ){
        resultado = "El numero mayor es: " + num2 + "\n"
        resultado += "El numero menor es: " + num1 ;
    }else{
        resultado = "Introduce numeros correctos";
    };

    return resultado;

};

console.log(mayorMenor(189, 189));