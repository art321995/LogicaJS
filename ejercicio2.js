function palindromo (texto){
    let invertido = texto .split('') .reverse() .join('');
    return (invertido === texto);
};

alert ("La palabra es un palindromo " + palindromo ("civic"));