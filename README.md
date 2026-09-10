# Airbnb UI Clone with AI

Clon frontend inspirado en Airbnb, desarrollado con Next.js 16, React, TypeScript y Tailwind CSS.

El proyecto reproduce tres vistas principales:

- Home `/`
- Catálogo `/catalog`
- Detalle de alojamiento `/rooms/[id]`

La implementación sigue un enfoque mobile-first, comenzando en 375px y adaptándose a escritorio desde 768px.

## Tecnologías

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- App Router

## Funcionalidades principales

### Home

- Búsqueda de alojamientos en tiempo real.
- Filtro por categoría.
- Carga simulada con `useEffect` y `setTimeout`.
- Carrusel horizontal en móvil.
- Reutilización de `ListingCard`.

### Catálogo

- Listado de alojamientos.
- Ordenación por precio ascendente y descendente.
- Reutilización de `ListingCard`.
- Placeholder visual de mapa.
- Layout responsive con resultados y mapa en escritorio.

### Detalle de alojamiento

- Ruta dinámica mediante `/rooms/[id]`.
- Carga simulada de datos.
- Galería de imágenes con navegación anterior y siguiente.
- Información del anfitrión.
- Amenities.
- Tarjeta de reserva.
- Contador de huéspedes con límites mínimos y máximos.

## Arquitectura

```text
app/
├── page.tsx
├── catalog/
│   └── page.tsx
└── rooms/
    └── [id]/
        └── page.tsx

components/
data/
types/
references/
context.md
```

Los componentes reutilizables viven dentro de `/components`.

Los tipos principales de TypeScript se encuentran en `/types`.

Los datos simulados utilizados por las tres vistas se encuentran en `/data`.

Las capturas utilizadas como referencia visual se encuentran en `/references`.

## Contexto y especificaciones

El archivo [`context.md`](./context.md) contiene:

- descripción de las tres vistas;
- usuario objetivo;
- componentes principales;
- decisiones responsive;
- especificaciones de componentes derivadas de las capturas de Airbnb.

## Instalación

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre:

```text
http://localhost:3000
```

## Validación

El proyecto ha sido comprobado con:

```bash
npm run lint
npm run build
```

## Notas

El mapa real y el date picker no se implementaron porque forman parte de los retos opcionales de la práctica.

No se utilizaron librerías de componentes preconstruidos; los estilos están realizados con Tailwind CSS.