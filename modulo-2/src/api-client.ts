// Tipo genérico de respuesta API
export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}

// Función genérica que simula una API
export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        codigoEstado: 200,
        exito: true,
        datos: {} as T // simulación
      });
    }, 1000);
  });
}