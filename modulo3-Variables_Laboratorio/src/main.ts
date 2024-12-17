import "./style.css";

let generos = ["Pop Rock", "Rock", "Hard Rock", "Clasica" ]

let TheBeatles = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: generos[0]
}

let Queen = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: generos[1]
}

let ACDC = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: generos[2]
}

let LudwigVanBeethoven = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: generos[3]
}

let TheRollingStones = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: generos[1]
}

console.log(`%c ${TheBeatles.nombre}`, "font-size:30px; font-weight: bold; background: green;");
console.log(`Comenzaron en el año, ${TheBeatles.año}, ${TheBeatles.activo ? 'están en activo' : 'no están en activo'} y son del genero ${TheBeatles.genero}`);

console.log(`%c ${Queen.nombre}`, "font-size:30px; font-weight: bold; background: green;");
console.log(`Comenzaron en el año, ${Queen.año}, ${Queen.activo ? 'están en activo' : 'no están en activo'} y son del genero ${Queen.genero}`);

console.log(`%c ${ACDC.nombre}`, "font-size:30px; font-weight: bold; background: green;");
console.log(`Comenzaron en el año, ${ACDC.año}, ${ACDC.activo ? 'están en activo' : 'no están en activo'} y son del genero ${ACDC.genero}`);

console.log(`%c ${LudwigVanBeethoven.nombre}`, "font-size:30px; font-weight: bold; background: green;");
console.log(`Comenzaron en el año, ${LudwigVanBeethoven.año}, ${LudwigVanBeethoven.activo ? 'están en activo' : 'no están en activo'} y son del genero ${LudwigVanBeethoven.genero}`);

console.log(`%c ${TheRollingStones.nombre}`, "font-size:30px; font-weight: bold; background: green;");
console.log(`Comenzaron en el año, ${TheRollingStones.año}, ${TheRollingStones.activo ? 'están en activo' : 'no están en activo'} y son del genero ${TheRollingStones.genero}`);
