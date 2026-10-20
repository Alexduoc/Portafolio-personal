Portafolio Personal

SPA hecha con **React + Vite**, **Ant Design**, **Atomic Design**, **Hooks** y pruebas con **Vitest + React Testing Library**.

## Instalación y uso

```bash
npm install        # instala dependencias
npm run dev        # levanta el proyecto en http://localhost:5173
npm test           # ejecuta las pruebas (modo watch)
npx vitest run     # ejecuta las pruebas una sola vez
npx vitest run --coverage   # informe de cobertura 
npm run build      # build de producción
```

## Estructura (Atomic Design)

```
src/
├── components/
│   ├── atoms/        SectionTitle, ProfilePhoto, Chip, SocialButton, ProjectPreview
│   ├── molecules/    TimelineItem, ProjectCard, FormField, SocialLinks
│   ├── organisms/    Header, PersonalSection, ExperienceSection, EducationSection,
│   │                 ProjectsSection, ContactForm, ContactSection, Footer
│   ├── templates/    PortfolioTemplate (estructura header → main → footer)
│   └── pages/        HomePage (ensambla datos + hooks)
├── hooks/            useProjects (useState + useEffect), useContactForm (useState)
├── data/portfolio.js
└── setupTests.js     jest-dom + stubs de matchMedia/ResizeObserver para antd en jsdom
```

## Requerimientos cubiertos

- **Secciones:** Personal, Experiencia, Estudios, Proyectos (con enlace al repo), Contacto (LinkedIn, GitHub y formulario validado en el cliente)
- **Hooks:** `useState` controla el formulario; `useEffect` + `setTimeout` simula la carga de proyectos (`Spin` → grilla).
- **Clean code:** solo `const`/`let`, funciones pequeñas, sin mutación directa del estado.
- **UI:** Ant Design en toda la app, con grilla responsiva (`Row`/`Col`).
- **Tests:** organismos principales, formulario, hooks y página completa.
