

function misPeliculas(peliculas){
    for(pelicula of peliculas){
        let paraMostrar = `"${pelicula.titulo} Director ${pelicula.autor}"`;

        if(pelicula.vista){
            console.log("Ya has visto: ", paraMostrar);
        }else{
            console.log("Te falta ver: ", paraMostrar);
        };
    };

    return peliculas;
};

const coleccionPeliculas = [
    {
        titulo: "El senor de los cielos",
        autor: "Amado Carrillo",
        vista: true
    },
    {
        titulo: "La liga de la justicia mexicana",
        autor: "Caro Quintero",
        vista: false
    },
    {
        titulo: "CDS vs CJNG",
        autor: "Nemesio Oceguera",
        vista: true
    },
    {
        titulo: "Culiacanazo",
        autor: "Ovidio Guzman",
        vista: true
    }
];



misPeliculas(coleccionPeliculas);