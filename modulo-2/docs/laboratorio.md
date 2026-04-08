# Módulo 2 — Dominio y API genérica

Este módulo implementa el modelado de un dominio utilizando TypeScript con tipado estricto, uniones discriminadas y programación genérica.

---

## Contenido

- `src/domain.ts`: definición de entidades y lógica de dominio.
- `src/api-client.ts`: simulación de acceso a datos mediante una API genérica.
- `src/index.ts`: archivo de prueba.

---

## Funcionalidad

- Modelado de entidades como `Estudiante` y `Asignatura`.
- Representación de estados mediante unión discriminada `EstadoMatricula`.
- Generación de reportes en función del estado.
- Simulación de peticiones a una API mediante genéricos (`<T>`).

---

## Ejecución

```bash
cd modulo-2
npm install
npx tsx src/index.ts