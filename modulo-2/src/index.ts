import { generarReporte, EstadoMatricula } from "./domain";
import { obtenerRecurso, RespuestaAPI } from "./api-client";

// 🔹 Parte 1 (ya la tenías)
const estado: EstadoMatricula = {
  tipo: "ACTIVA",
  asignaturas: [
    { id: "1", nombre: "Math", creditos: 6 },
    { id: "2", nombre: "Programming", creditos: 6 }
  ]
};

console.log(generarReporte(estado));

// 🔥 Parte 2 (genéricos)

interface Usuario {
  id: number;
  nombre: string;
}

async function main() {
  const respuesta: RespuestaAPI<Usuario> =
    await obtenerRecurso<Usuario>("/usuarios");

  console.log("Respuesta API:", respuesta);
}

main();