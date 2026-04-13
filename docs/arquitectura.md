# Arquitectura del Módulo 2

## Introducción

En este módulo se utiliza TypeScript con tipado estricto para mejorar la calidad del código.  
El objetivo es detectar errores antes de ejecutar el programa y definir estructuras claras para los datos.

---

## Modelado del dominio

Se han definido las entidades principales del sistema:

- Estudiante  
- Asignatura  

Se utiliza `interface` porque:

- Permite definir la forma de los objetos.
- Es ideal para representar entidades del sistema.
- Facilita ampliar el código en el futuro.

### Ejemplo

```ts
interface Estudiante {
  readonly id: string;
  nombre: string;
  email: string;
}

## Unión discriminada: EstadoMatricula
Los estados de matrícula se representan como una unión discriminada mediante la propiedad tipo.

Este patrón permite representar estados válidos del sistema y evita combinaciones incorrectas de propiedades.

Estados definidos:

-MatriculaActiva: incluye asignaturas activas.
-MatriculaSuspendida: incluye motivo de suspensión.
-MatriculaFinalizada: incluye nota media.