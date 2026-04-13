# Módulo 1 — Laboratorio práctico

Este módulo implementa un conjunto de utilidades matemáticas en TypeScript utilizando tipado estricto.

## Contenido

- `src/math-utils.ts`: funciones estadísticas:
  - `calcularMedia`
  - `calcularMediana`
  - `filtrarAtipicos`

- `src/index.ts`: archivo de prueba que ejecuta las funciones y muestra resultados en consola.

---

## Funcionalidad

Se han implementado funciones para el análisis de datos numéricos:

- Cálculo de media aritmética.
- Cálculo de mediana.
- Filtrado de valores atípicos en un conjunto de datos.

Todas las funciones están tipadas de forma estricta.

---

## Casos límite

Se han contemplado escenarios especiales:

- Arrays vacíos:
  - `calcularMedia` devuelve `null`.
  - `calcularMediana` devuelve `null`.

- `filtrarAtipicos`:
  - Si el array está vacío → devuelve `[]`.
  - Si no hay desviación → devuelve el array original.

---

## Ejecución

```bash
cd modulo-1
npm install
npx tsx src/index.ts