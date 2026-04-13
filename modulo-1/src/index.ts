import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

const datos = [10, 20, 30, 1000];

console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Sin atípicos:", filtrarAtipicos(datos, 100));