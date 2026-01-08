# Environmental Monitoring Dashboard – Prueba Técnica

## Descripción

Este proyecto fue desarrollado como parte de una **prueba técnica para una postulación laboral**.  
El objetivo es construir una **aplicación web full stack** que permita **visualizar y analizar datos de muestras ambientales**, utilizando un archivo JSON proporcionado.

La solución consta de un **backend con una API REST** y un **frontend tipo dashboard**, cumpliendo los requisitos técnicos y funcionales solicitados.

---

## Qué se implementó

### Backend
- API REST desarrollada con **Node.js, Express y TypeScript**.
- Endpoint `GET /api/samples` que sirve los datos del JSON proporcionado.
- **Paginación** implementada en el backend (10 muestras por página).
- **Filtros combinables**:
  - zone
  - sampleType
  - status
  - fromDate
  - toDate
- El backend es la única fuente de lógica para filtros y paginación.

### Frontend
- Dashboard desarrollado con **React, TypeScript y Tailwind CSS**.
- Visualización de las muestras en una **tabla**.
- **Indicadores visuales de estado** (normal, warning, critical).
- **Filtros avanzados** conectados al backend.
- **Sistema de paginación**.
- Los filtros y la paginación se reflejan en la **URL**, permitiendo compartir vistas específicas
