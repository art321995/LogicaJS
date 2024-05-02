// Dado un array de alumnos (nombre y nota) mostrar cuantos alumnos estan reprobados y cuantos estan aprobados

function reprobados(alumnos){
    let aprobados = 0, reprobados = 0;

    for(alumno of alumnos){
        if(alumno[1] >= 6){
            aprobados++
        }else{
            reprobados++;
        };
    };

    return {
        "Aprovados" : aprobados,
        "Reprobados" : reprobados
    };
};

console.log(reprobados([
    ["Juan", 6],
    ["Arturo", 8],
    ["Humberto", 3],
    ["Gustavo", 9],
    ["Armando", 0],
    ["Jesus", 10]
]));