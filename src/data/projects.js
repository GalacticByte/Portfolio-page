const images = import.meta.glob('@/assets/img/*.jpg', { eager: true })

const rawProjects = [
  {
    title: 'canvico-editor',
    description:
      'Modularny edytor obrazów oparty na TypeScript i Canvas API, zaprojektowany jako elastyczna biblioteka do integracji z dowolnym UI. Projekt koncentruje się na pracy z Canvas API, zarządzaniu stanem narzędzi oraz architekturze umożliwiającej swobodne rozmieszczenie elementów interfejsu w strukturze HTML.',
    github: 'https://github.com/GalacticByte/canvico-editor',
    live: 'https://galacticbyte.github.io/canvico-editor/demo/',
    technologies: ['TYPESCRIPT', 'CANVAS API'],
    image: images['/src/assets/img/canvico-editor.jpg'].default,
  },
  {
    title: 'Aplikacja Czat',
    description:
      'Aplikacja czatu w czasie rzeczywistym zbudowana w Vue 3 i TypeScript, wykorzystująca Socket.IO oraz własny backend w Express.js. Projekt obejmuje komunikację real-time, prosty mechanizm identyfikacji użytkownika oparty na JWT, persystencję wiadomości w PostgreSQL oraz wymianę danych opartą na DTO jako kontrakcie między frontendem i backendem.',
    github: 'https://github.com/GalacticByte/Simple-Vue-Chat',
    live: 'https://chat-app-lh2l.onrender.com/',
    technologies: [
      'VUE',
      'TAILWIND CSS',
      'TYPESCRIPT',
      'VITE',
      'SOCKET.IO',
      'NODE.JS',
      'EXPRESS.JS',
      'PRISMA',
      'POSTGRESQL',
      'JWT',
    ],
    image: images['/src/assets/img/chat-app-02.jpg'].default,
  },
  {
    title: 'ecovaro-corporate-site ',
    description:
      'Fikcyjna strona korporacyjna oparta na autorskim motywie WordPress, zaprojektowana w oparciu o modułową architekturę sekcji. Projekt obejmuje dynamiczne formularze oraz elastyczny system pól oparty na Carbon Fields jako alternatywę dla ACF Pro.',
    github: 'https://github.com/GalacticByte/ecovaro-corporate-site',
    live: 'https://ecovaro-demo-website.42web.io/ecovaro/',
    technologies: ['WORDPRESS', 'BOOTSTRAP', 'PHP', 'JQUERY', 'CARBON FIELDS'],
    image: images['/src/assets/img/ecovaro-corporate-site-01.jpg'].default,
  },
  {
    title: 'Notatnik',
    description:
      'Aplikacja do zarządzania notatkami w formacie Markdown, zbudowana w React i TypeScript. Umożliwia dodawanie, edytowanie i usuwanie notatek, edycję z podglądem na żywo, wyszukiwanie w czasie rzeczywistym oraz eksport do PDF. Stan serwerowy zarządzany jest przy użyciu TanStack Query, a backend oparto na Express.js i MongoDB, z kontraktowym API OpenAPI 3.0 i walidacją danych w runtime.',
    github: 'https://github.com/GalacticByte/notes-app',
    live: 'https://notes-app-k7v6.onrender.com/',
    technologies: [
      'REACT',
      'TYPESCRIPT',
      'VITE',
      'TANSTACK QUERY',
      'NODE.JS',
      'EXPRESS.JS',
      'MONGODB',
      'OPENAPI',
    ],
    image: images['/src/assets/img/notes-app-screenshot.jpg'].default,
  },
  {
    title: 'Strona Wizytówka',
    description:
      'Strona portfolio zbudowana w Vue, zaprojektowana jako prosta aplikacja prezentacyjna do wyświetlania projektów i informacji o autorze. Projekt opiera się na czytelnej strukturze aplikacji oraz komponentach dopasowanych do poszczególnych sekcji strony.',
    github: 'https://github.com/GalacticByte/Portfolio-page',
    live: 'https://galacticbyte.github.io/Portfolio-page/',
    technologies: ['VUE', 'VITE', 'BOOTSTRAP', 'SCSS'],
    image: images['/src/assets/img/portfolio-page-02.jpg'].default,
  },
]

export default rawProjects
