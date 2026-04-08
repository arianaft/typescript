// Entidad: Estudiante
export interface Estudiante {
  readonly id: string;
  nombre: string;
  email: string;
}

// Entidad: Asignatura
export interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
}

// Estados de matrícula
interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: string;
}

interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

// Unión discriminada
export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;

// Función tipo backend
export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Asignaturas activas: ${estado.asignaturas.length}`;

    case "SUSPENDIDA":
      return `Matrícula suspendida: ${estado.motivo}`;

    case "FINALIZADA":
      return `Nota media: ${estado.notaMedia}`;

    default:
      const _exhaustivo: never = estado;
      return _exhaustivo;
  }
}