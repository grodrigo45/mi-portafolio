# 🚀 Portafolio Profesional & Repositorio de Software

> Portafolio web moderno de alto rendimiento diseñado para exhibir arquitecturas de software, aplicaciones full-stack y proyectos personales de código abierto.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 📌 Descripción

Este proyecto funciona como carta de presentación técnica y catálogo interactivo de proyectos. Implementa una interfaz de usuario en modo oscuro con acentos neón violeta, componentes modulares desacoplados, microinteracciones fluidas y un diseño centrado en métricas de ingeniería y arquitectura de software.

### ✨ Características Principales

- **Diseño Glassmorphism & Modo Oscuro:** Estilizado moderno con degradados y efectos de resplandor ambiental (*ambient glow*).
- **Arquitectura Modular en Componentes JSX:** Estructura limpia y escalable donde cada vista y elemento de UI está desacoplado.
- **Gestión Centralizada de Datos:** La información del perfil, métricas, habilidades y proyectos se administra desde un único archivo de configuración (`src/data/portfolioData.js`).
- **Terminal Interactiva de Código:** Widget estilizado que muestra el perfil profesional y stack técnico mediante sintaxis de objeto JavaScript.
- **Métricas Bento & Barras de Habilidades:** Resumen visual de años de experiencia, proyectos finalizados y dominio técnico por porcentaje.
- **Acceso Directo a Código y Demos:** Enlaces directos a los repositorios en GitHub y despliegues en producción de cada proyecto.

---

## 🛠️ Stack Tecnológico

| Capa / Herramienta | Tecnología |
| :--- | :--- |
| **Biblioteca Frontend** | React 18+ (Hooks, Funciones modulares) |
| **Empaquetador & Dev Server** | Vite |
| **Estilos & UI** | Tailwind CSS |
| **Iconografía** | Lucide React & SVGs vectoriales nativos |
| **Lenguaje** | JavaScript (ES6+) |
| **Despliegue sugerido** | Vercel / Netlify / Cloudflare Pages |

---

## 📁 Estructura del Proyecto

```text
mi-portafolio/
├── public/
│   ├── favicon.ico
│   └── cv.pdf                 # Currículum vitae descargable
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Barra de navegación fija con backdrop-blur
│   │   ├── Hero.jsx           # Sección principal de bienvenida y CTA
│   │   ├── CodeCard.jsx       # Tarjeta con simulación de terminal de código
│   │   ├── About.jsx          # Sección "Sobre Mí" con métricas Bento
│   │   ├── Skills.jsx         # Barras de habilidades y stack técnico
│   │   ├── Projects.jsx       # Contenedor y rejilla de proyectos
│   │   ├── ProjectCard.jsx    # Tarjeta individual con tags y enlaces
│   │   ├── Testimonials.jsx   # Reseña de enfoque de ingeniería
│   │   └── Footer.jsx         # Llamado a la acción, contacto y redes
│   ├── data/
│   │   └── portfolioData.js   # Fuente de verdad de textos, proyectos y links
│   ├── App.jsx                # Ensamblado principal de componentes
│   ├── index.css              # Directiva de Tailwind CSS y estilos base
│   └── main.jsx               # Punto de entrada de React en el DOM
├── index.html
├── package.json
├── tailwind.config.js / vite.config.js
└── README.md