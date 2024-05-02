// Dado dos numeros, sacar un numero aleatorio entre ellos

function aleatorio(num1, num2){

    return Math.round(Math.random() * (num1 - num2) + num2);

};

console.log(aleatorio(1,35));

