# Omar Jaimes Rew - Portfolio Web

Este repositorio contiene el sitio web tipo portafolio del artista **Omar Jaimes Rew**.

## 🛠️ Stack Tecnológico
- **HTML5:** Marcado semántico y estructura.
- **CSS3:** Estilos personalizados, sin frameworks (salvo font-awesome).
- **JavaScript (Vanilla):** Lógica para carruseles, lightbox y sketches interactivos (P5.js).
- **Librerías:**
  - [Font Awesome 6.5.0](https://fontawesome.com/) (Iconos)
  - [P5.js](https://p5js.org/) (Arte generativo en `origen.html`)

## 📂 Estructura del Proyecto
```
/
├── css/                # Hojas de estilo (modulares)
│   ├── estilos.css     # Estilos base
│   ├── home.css        # Estilos específicos del home
│   ├── menu.css        # Estilos de navegación
│   └── ...
├── js/                 # Scripts JavaScript
│   ├── lightBox.js     # Funcionalidad de galería modal
│   └── origen-sketch.js # Sketch P5.js
├── img/                # Imágenes optimizadas para web
├── videos/             # Recursos de video
├── data/               # Archivos de datos (captions, etc.)
└── index.html          # Página principal
```

## 🚀 Buenas Prácticas y Mantenimiento
Este proyecto sigue las reglas "Básicos" definidas para asegurar calidad y consistencia:

1.  **Imágenes:** Usar formatos optimizados (.jpg, .png, .webp). Evitar .tif.
2.  **CSS:** Mantener la modularidad. No usar `@import` dentro de CSS; vincular archivos con `<link>` en el HTML.
3.  **JavaScript:** Ubicar scripts en la carpeta `js/`. Evitar lógica compleja inline en HTML.
4.  **Control de Versiones:** Commits atómicos y descriptivos.

## 📝 Instrucciones de Edición
1.  **Nueva Página:** Duplicar la estructura de `about.html` o `plantilla` (si existe) y mantener los enlaces a CSS en el `<head>`.
2.  **Galería:** Para agregar imágenes al lightbox, asegurar que la estructura HTML coincida con lo esperado por `lightBox.js` (contenedores con clases específicas).

## ⚠️ Notas Importantes
- La carpeta `data/` contenía archivos pesados (.tif) en versiones anteriores. Se recomienda convertir cualquier medio pesado antes de subirlo.
- El formulario de contacto (`contact.html`) es informativo.

---
© 2025 Omar Jaimes Rew
