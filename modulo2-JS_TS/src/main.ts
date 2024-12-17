import "./style.css";

let comensales = 7;
let tiketCena = 120;
let precioBebidas = 18;

let precioCenaSinBebidas = tiketCena - precioBebidas; // 102
let cuentaDeCadaUno = precioCenaSinBebidas / comensales // 14,57

console.log("La cuenta del cumpleañero seria :" , (cuentaDeCadaUno + precioBebidas).toFixed(2))
console.log("La cuenta de cada amigo :" , cuentaDeCadaUno.toFixed(2) )