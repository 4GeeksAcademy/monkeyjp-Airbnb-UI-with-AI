# Contexto del proyecto

Este proyecto es un clon frontend inspirado en Airbnb, construido con Next.js 16,
React, TypeScript y Tailwind CSS.

La aplicación permitirá explorar alojamientos, consultar resultados y acceder al
detalle de una habitación mediante una interfaz responsive y mobile-first.

## Páginas

### Home (`/`)

La página de inicio permite explorar alojamientos disponibles mediante una barra
de navegación, un campo de búsqueda, una fila de categorías y una cuadrícula de
tarjetas de alojamiento.

El usuario podrá escribir en el buscador para filtrar los alojamientos visibles en
tiempo real y seleccionar una categoría activa.

Componentes principales:

- `Header`: logo, campo de búsqueda y acciones del usuario.
- `SearchBar`: campo de búsqueda controlado mediante estado.
- `CategoryNav`: categorías de alojamiento seleccionables.
- `ListingGrid`: cuadrícula responsive de alojamientos.
- `ListingCard`: tarjeta reutilizable con imagen, título, precio y valoración.
- `LoadingIndicator`: indicador visible mientras se simula la carga de datos.

### Catálogo (`/catalog`)

La página de catálogo muestra una lista de alojamientos y permite ordenarlos según
su precio.

En escritorio, los resultados aparecen junto a un área de mapa. En dispositivos
móviles, el mapa se muestra debajo de las tarjetas.

Componentes principales:

- `Header`: navegación principal.
- `ResultsHeader`: número de resultados y control de ordenación.
- `SortControl`: permite ordenar los alojamientos por precio ascendente o descendente.
- `ListingGrid`: muestra los resultados disponibles.
- `ListingCard`: componente reutilizado desde la página Home.
- `MapPlaceholder`: área visual que representa el mapa.

### Detalle de habitación (`/rooms/[id]`)

La página de detalle muestra la información completa de un alojamiento concreto
utilizando el `id` recibido desde la URL.

Los datos se cargan de forma simulada al montar la página.

Componentes principales:

- `Header`: navegación global.
- `ImageGallery`: galería de imágenes con navegación anterior y siguiente.
- `RoomHeader`: título, valoración, número de reseñas y ubicación.
- `HostInfo`: avatar, nombre del anfitrión y años como anfitrión.
- `AmenitiesList`: servicios disponibles en el alojamiento.
- `BookingCard`: precio por noche, contador de huéspedes y botón de reserva.
- `LoadingIndicator`: indicador mientras se cargan los datos.

## Usuario de la plataforma

El usuario es una persona que busca alojamiento para un viaje o estancia temporal.

Quiere descubrir opciones disponibles, comparar precios y valoraciones, filtrar
resultados y consultar los detalles de un alojamiento antes de decidir si desea
reservarlo.

## Enfoque responsive

La aplicación seguirá un enfoque mobile-first.

El diseño se desarrollará inicialmente para un viewport de 375px y posteriormente
se adaptará a pantallas de escritorio a partir de 768px.

En móvil, los contenidos se mostrarán principalmente en una sola columna. En
escritorio se utilizarán cuadrículas con varias columnas y distribuciones más amplias.

## Especificaciones derivadas de las capturas

Las capturas muestran una interfaz de exploración centrada en imágenes, tarjetas
con información compacta y desplazamientos horizontales en móvil. La
implementación mantendrá el estilo visual mediante Tailwind CSS, sin librerías de
componentes preconstruidas ni estilos inline. Toda navegación interna entre
alojamientos, catálogo y acciones de retorno debe usar `Link` de Next.js. El mapa
del catálogo y el mapa del detalle se representarán inicialmente con un
placeholder visual; no se implementará integración cartográfica real. Del mismo
modo, el calendario se dejará como una representación visual o control básico,
sin date picker externo.

### Home

#### Componentes visibles y responsabilidades

- `HomePage`: compone la vista y recibe o importa las secciones de alojamientos,
	experiencias y servicios.
- `Header`: muestra la cabecera móvil con acceso al buscador y, en escritorio,
	la navegación global. Sus enlaces internos usan `Link`.
- `SearchBar`: campo de búsqueda visible en la parte superior. Mantiene el texto
	introducido y comunica el cambio a la página para filtrar las tarjetas en
	tiempo real.
- `CategoryNav`: lista horizontal desplazable de categorías, como Todo,
	Alojamientos y Experiencias. Marca una categoría activa y permite cambiarla.
- `SectionHeader`: título, texto auxiliar opcional y acción para avanzar a más
	resultados de una sección.
- `ListingSection`: agrupa un `SectionHeader` y un carrusel horizontal de
	`ListingCard` para cada bloque de alojamientos.
- `ListingCard`: presenta imagen, insignia opcional, acción de favorito, título,
	fechas o subtítulo, anfitrión, precio y valoración. Es reutilizable en Home y
	Catálogo.
- `ExperienceCategoryRow`: muestra categorías visuales de experiencias con
	imagen y nombre.
- `ExperienceCard`: muestra una experiencia con imagen, anfitrión, precio y
	valoración.
- `ServiceCategoryRow`: muestra servicios cercanos con imagen o ilustración y
	etiqueta.
- `InspirationSection`: muestra pestañas de inspiración, destinos y enlaces
	agrupados.
- `Footer`: contiene enlaces de asistencia, recursos para anfitriones, empresa,
	idioma, moneda y redes sociales.
- `BottomNavigation`: barra inferior móvil con enlaces a Explorar, Favoritos e
	Inicio de sesión.
- `LoadingIndicator`: estado temporal mientras se simulan los datos iniciales.

#### Props y composición

La composición recomendada es:

`HomePage > Header + SearchBar + CategoryNav + main > ListingSection >
ListingCard + ExperienceCategoryRow + ExperienceCard + ServiceCategoryRow +
InspirationSection + Footer + BottomNavigation`.

Props principales:

- `Header`: `searchLabel: string`, `links: NavLink[]`.
- `SearchBar`: `value: string`, `onChange: (value: string) => void`,
	`placeholder?: string`.
- `CategoryNav`: `categories: Category[]`, `activeCategoryId: string`,
	`onSelect: (categoryId: string) => void`.
- `SectionHeader`: `title: string`, `description?: string`,
	`href?: string`.
- `ListingSection`: `title: string`, `description?: string`,
	`listings: Listing[]`, `onFavorite?: (listingId: string) => void`.
- `ListingCard`: `listing: Listing`, `href: string`, `showDates?: boolean`,
	`onFavorite?: (listingId: string) => void`.
- `ExperienceCategoryRow` y `ServiceCategoryRow`: `items: Category[]`.
- `ExperienceCard`: `experience: Experience`, `href: string`.
- `BottomNavigation`: `activeItem: NavigationItem`.

El `href` de cada `ListingCard` debe apuntar a `/rooms/${listing.id}` mediante
`Link`. La página filtra las listas derivadas por coincidencia de búsqueda en
nombre, ubicación o descripción y por la categoría activa antes de pasarlas a
cada `ListingSection`.

#### Estado y efectos

- `HomePage` mantiene `searchTerm` con `useState` para el filtrado inmediato y
  `activeCategoryId` para la categoría seleccionada.

- `HomePage` mantiene `listings` con `useState`, comenzando con un array vacío.

- `isLoading` comienza en `true`.

- Un `useEffect` ejecuta un `setTimeout` corto al montar la página para simular
  la carga de datos. Cuando termina el timeout, asigna los datos simulados a
  `listings` y cambia `isLoading` a `false`.

- Mientras los datos no estén disponibles se muestra `LoadingIndicator`.

- El favorito puede mantenerse como estado local de la tarjeta si todavía no
  existe una capa global de favoritos.

- No se necesita `useEffect` para filtrar: el filtrado debe derivarse del estado
  actual durante el render.

#### Responsive

- A 375px, `CategoryNav`, cada carrusel de `ListingSection`, la fila de
	experiencias y la fila de servicios deben desplazarse horizontalmente sin
	romper el ancho de la página. Las tarjetas conservan un ancho estable y las
	imágenes una relación de aspecto constante.
- La `BottomNavigation` permanece fija al borde inferior en móvil y deja espacio
	inferior suficiente para no ocultar contenido.
- Desde 768px, la cabecera puede expandir la navegación, los carruseles pueden
	usar varias columnas o una cuadrícula y la barra inferior puede ocultarse.
- `Footer` pasa de bloques verticales en móvil a columnas distribuidas en
	escritorio. Los botones de avance de sección permanecen accesibles sin
	superponerse al título.

### Catálogo

#### Componentes visibles y responsabilidades

- `CatalogPage`: coordina filtros, orden, estado de carga, mapa placeholder y
	resultados.
- `CatalogHeader`: botón de regreso, resumen de destino, fechas y huéspedes,
	además del acceso al panel de filtros. El regreso interno usa `Link`.
- `FilterChipRow`: fila horizontal de filtros rápidos, como lavadora, jacuzzi o
	admite mascotas.
- `FilterButton`: abre o representa los filtros disponibles sin implementar aún
	un panel complejo.
- `MapPlaceholder`: representa visualmente el mapa y sus marcadores de precio;
	no obtiene datos cartográficos reales.
- `ResultsSheet`: contenedor visual de resultados que separa el mapa de la lista
	y muestra el número de alojamientos.
- `ResultsHeader`: muestra el texto de resultados y la explicación de ordenación.
- `SortControl`: control que permite elegir precio ascendente o descendente.
- `ListingList`: lista vertical de resultados.
- `ListingCard`: tarjeta reutilizada de Home, configurada para mostrar galería,
	favorito, precio total, precio rebajado, fechas, anfitrión y etiquetas como
	cancelación gratuita.
- `PriceRangeHint`: bloque informativo del rango de precios; es visual y no
	implementa todavía un slider funcional.
- `BottomNavigation`: navegación inferior móvil reutilizada de Home.

#### Props y composición

La jerarquía recomendada es:

`CatalogPage > CatalogHeader + FilterChipRow + MapPlaceholder + ResultsSheet >
ResultsHeader + SortControl + ListingList > ListingCard + PriceRangeHint +
BottomNavigation`.

Props principales:

- `CatalogHeader`: `destination: string`, `dateLabel: string`,
	`guestLabel: string`, `backHref: string`, `onOpenFilters: () => void`.
- `FilterChipRow`: `filters: FilterOption[]`, `selectedIds: string[]`,
	`onToggle: (filterId: string) => void`.
- `MapPlaceholder`: `markers: PriceMarker[]`, `label?: string`.
- `ResultsHeader`: `resultCount: number`, `description?: string`.
- `SortControl`: `value: SortOrder`, `onChange: (order: SortOrder) => void`.
- `ListingList`: `listings: Listing[]`, `sortOrder: SortOrder`,
	`onFavorite?: (listingId: string) => void`.
- `PriceRangeHint`: `minimum: number`, `maximum: number`,
	`currency: string`.

#### Estado y efectos

- `CatalogPage` mantiene `sortOrder` con `useState`, con valores `price-asc` y
	`price-desc`; el listado se ordena por una copia del array para no mutar los
	datos originales.
- Puede mantener `selectedFilterIds` y `isFilterPanelOpen` con `useState` para
	los chips y el panel futuro.
- La interacción de mapa es únicamente visual en esta fase y no necesita
	estado de mapa real.
- Si se desea simular carga también en catálogo, `isLoading` puede controlarse
	con un `useEffect` y `setTimeout`, aunque el requisito de carga simulada
	obligatorio se cubre en Home y Detalle.

#### Responsive

- A 375px, la cabecera se apila en una sola franja, los chips se desplazan
	horizontalmente y el `MapPlaceholder` ocupa el ancho completo antes de la
	lista. El resultado se presenta como una columna de tarjetas grandes.
- El mapa debe tener una altura estable y los marcadores no deben cambiar el
	tamaño del layout. Los controles de filtros deben permanecer alcanzables.
- Desde 768px, el catálogo usa una composición de dos áreas: `ListingList` en
	una columna y `MapPlaceholder` en otra, idealmente con el mapa visible y
	posicionado de forma estable mientras se revisan resultados.
- En escritorio, los filtros pueden distribuirse en una barra completa y la
	navegación inferior se sustituye por navegación superior.

### Detalle de habitación

#### Componentes visibles y responsabilidades

- `RoomDetailPage`: recibe el segmento dinámico `id` de `/rooms/[id]`, carga el
	alojamiento simulado y compone el detalle. El `id` debe ser la fuente para
	seleccionar el registro mostrado.
- `RoomHero`: imagen principal a pantalla ancha con acciones de volver,
	compartir y favorito. La vuelta puede usar `Link` a `/catalog`.
- `ImageGallery`: muestra las imágenes del alojamiento, el contador `1 / N` y
	controles anterior y siguiente.
- `RoomOverview`: título, ubicación, tipo de habitación, capacidad y datos
	resumidos.
- `RatingSummary`: valoración, insignia de recomendación y número de reseñas.
- `HostSummary`: avatar, nombre, condición de Superanfitrión y experiencia.
- `HighlightsList`: reconocimientos y mensajes destacados del alojamiento.
- `TranslationNotice`: aviso de traducción cuando corresponda.
- `RoomDescription`: descripción truncada con acción `Mostrar más`.
- `GuestReviews`: puntuación general, categorías mencionadas y reseñas
	resumidas, con enlace para verlas todas.
- `SleepingArrangements`: imagen y descripción de camas o literas.
- `AmenitiesList`: servicios destacados y acción para mostrar todas las
	comodidades.
- `MapPlaceholder`: mapa visual de la ubicación, sin integración real.
- `StayDatesSummary`: resumen de noches y fechas seleccionadas. El calendario
	puede ser estático en esta fase y no es un date picker real.
- `HostProfile`: tarjeta ampliada del anfitrión, estadísticas, biografía,
	coanfitriones y acción para escribirle.
- `HouseRules`: política de cancelación, normas de la casa y seguridad.
- `Breadcrumbs`: ruta de contexto, como Airbnb, Portugal y Oporto.
- `RelatedListings`: opciones cercanas reutilizando `ListingCard`.
- `BookingBar`: barra fija móvil con precio total, fechas y botón Reservar.
- `LoadingIndicator`: estado visible mientras se simula la carga del detalle.

#### Props y composición

La jerarquía recomendada es:

`RoomDetailPage > RoomHero > ImageGallery + RoomOverview + RatingSummary +
HostSummary + HighlightsList + TranslationNotice + RoomDescription +
GuestReviews + SleepingArrangements + AmenitiesList + MapPlaceholder +
StayDatesSummary + HostProfile + HouseRules + Breadcrumbs + RelatedListings +
BookingBar`.

Props principales:

- `RoomDetailPage`: `params: { id: string }` o la forma de parámetros dinámica
	equivalente soportada por Next.js 16, además de los datos cargados.
- `RoomHero`: `images: RoomImage[]`, `currentImageIndex: number`,
	`onPrevious: () => void`, `onNext: () => void`, `onFavorite: () => void`,
	`backHref: string`.
- `ImageGallery`: `images: RoomImage[]`, `activeIndex: number`,
	`onSelect: (index: number) => void`.
- `RoomOverview`: `room: Room`.
- `RatingSummary`: `rating: Rating`, `badge?: string`.
- `HostSummary` y `HostProfile`: `host: Host`.
- `HighlightsList`: `items: Highlight[]`.
- `RoomDescription`: `text: string`, `isExpanded: boolean`,
	`onToggle: () => void`.
- `GuestReviews`: `reviewSummary: ReviewSummary`, `reviews: Review[]`,
	`onShowAll: () => void`.
- `SleepingArrangements`: `arrangements: SleepingArrangement[]`.
- `AmenitiesList`: `amenities: Amenity[]`, `onShowAll: () => void`.
- `MapPlaceholder`: `location: Location`.
- `BookingBar`: `totalPrice: number`, `currency: string`,
	`datesLabel: string`, `guestCount: number`, `onGuestChange: (count: number) => void`,
	`onReserve: () => void`.
- `RelatedListings`: `listings: Listing[]`.

#### Estado y efectos

- `RoomDetailPage` mantiene `room`, `isLoading` y `error` con `useState`.
- Un `useEffect` observa el `id`, ejecuta un `setTimeout` para simular la carga
	del alojamiento y limpia el timeout al cambiar de id o desmontar. Mientras
	carga muestra `LoadingIndicator`.
- `ImageGallery` mantiene `activeImageIndex` con `useState`; los controles
	anterior y siguiente deben hacer wrap-around y mantener el contador visible.
- `BookingBar` mantiene `guestCount` con `useState`, con un mínimo de 1 y un
	máximo definido por `Room.maxGuests`. Los botones de aumentar y reducir deben
	quedar deshabilitados en los límites.
- `RoomDescription` puede mantener `isExpanded` y `GuestReviews` o
	`AmenitiesList` pueden mantener estados locales para expandir contenido.
- No se necesita `useEffect` para la navegación de galería ni para el contador
	de huéspedes; ambos derivan de interacciones locales.

#### Responsive

- A 375px, `RoomHero` ocupa el ancho completo y sus acciones flotan sobre la
	imagen. El contenido se apila en una columna con separadores visibles y la
	`BookingBar` permanece fija abajo sin cubrir texto; el contenido debe reservar
	padding inferior para ella.
- La galería conserva una relación de aspecto estable y los controles deben ser
	táctiles. Las reseñas, comodidades y alojamientos relacionados pueden usar
	desplazamiento horizontal cuando haya tarjetas consecutivas.
- El calendario visual, el perfil del anfitrión y el mapa placeholder ocupan el
	ancho disponible sin implementar aún interacción avanzada.
- Desde 768px, el detalle puede usar dos columnas: contenido principal y una
	tarjeta de reserva lateral persistente. La barra fija móvil se convierte en
	esa tarjeta lateral o se oculta en favor de ella.
- La galería puede crecer a una composición de varias imágenes en escritorio,
	mientras el resto de las secciones conserva un ancho de lectura limitado.

#### Interfaces de TypeScript compartidas

Las interfaces iniciales deberían vivir en `types` y permitir reutilizar los
datos entre las tres vistas:

- `Listing`: `id`, `title`, `location`, `imageUrls`, `price`, `currency`,
	`rating`, `reviewCount`, `hostType`, `dates`, `badge`, `discount`,
	`freeCancellation`.
- `Room extends Listing`: `description`, `roomType`, `maxGuests`, `beds`,
	`bathrooms`, `amenities`, `highlights`, `host`, `reviews`, `locationDetail`,
	`sleepingArrangements`.
- `RoomImage`: `url`, `alt`.
- `Host`: `id`, `name`, `avatarUrl`, `isSuperhost`, `yearsHosting`,
	`reviewCount`, `rating`, `bio`, `profession`, `cohosts`.
- `Review`: `id`, `author`, `avatarUrl`, `rating`, `date`, `text`.
- `ReviewSummary`: `rating`, `reviewCount`, `categories`.
- `Amenity`: `id`, `name`, `iconName`, `description?`.
- `Highlight`: `id`, `title`, `description`, `iconName`.
- `SleepingArrangement`: `id`, `label`, `count`, `imageUrl?`.
- `Category`: `id`, `label`, `iconName?`, `imageUrl?`.
- `Experience`: `id`, `title`, `imageUrl`, `hostName`, `price`, `rating`.
- `NavLink`: `label`, `href`.
- `FilterOption`: `id`, `label`.
- `PriceMarker`: `id`, `label`, `position: { top: string; left: string }`.
- `Location`: `city`, `region`, `country`, `latitude?`, `longitude?`.
- `Rating`: `value`, `reviewCount`.
- `SortOrder`: unión literal `'price-asc' | 'price-desc'`.

El modelo `Listing` es el contrato compartido que permite que `ListingCard`
funcione tanto en las secciones horizontales de Home como en la lista vertical
de Catálogo y en `RelatedListings` del detalle. Los enlaces de las tarjetas
deben llevar a `/rooms/[id]` mediante `Link`, evitando navegación manual con
`window.location`.


> Nota de alcance:
> Las siguientes especificaciones identifican elementos visibles en las capturas
> originales de Airbnb. La implementación se centrará primero en los componentes
> y comportamientos exigidos por la evaluación base. Los elementos adicionales
> identificados en las capturas podrán simplificarse u omitirse si no forman parte
> de los requisitos obligatorios.