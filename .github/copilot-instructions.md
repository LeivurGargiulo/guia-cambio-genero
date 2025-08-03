<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Instrucciones para GitHub Copilot

Este es un proyecto de una guía comunitaria para el cambio legal de nombre y género en Argentina, construido con Astro, TailwindCSS, DaisyUI y Netlify CMS.

## Contexto del proyecto

- **Propósito**: Guía informativa para la comunidad trans, travesti y no binarie
- **Audiencia**: Personas de todas las edades y niveles técnicos
- **Dispositivo principal**: Móviles (diseño mobile-first)
- **Idioma**: Español (Argentina)
- **Tono**: Respetuoso, directo y amigable

## Stack tecnológico

- **Framework**: Astro (Static Site Generator)
- **Estilos**: TailwindCSS con DaisyUI
- **CMS**: Netlify CMS para gestión de contenido
- **Contenido**: Markdown con frontmatter
- **Hosting**: Netlify

## Convenciones del código

### Nombres de archivos
- Usar kebab-case para archivos: `antes-del-cambio.md`
- Usar PascalCase para componentes: `Layout.astro`
- Usar camelCase para variables y funciones

### Componentes Astro
- Usar DaisyUI components siempre que sea posible
- Mantener accesibilidad WCAG 2.1 AA
- Incluir meta tags apropiados para SEO

### Contenido
- Todo el contenido en español
- Usar lenguaje inclusivo (x en lugar de o/a)
- Mantener tono empático y respetuoso
- Incluir información actualizada y verificable

### Estilos
- Usar clases de TailwindCSS
- Aprovechar el sistema de temas de DaisyUI
- Implementar diseño responsivo (mobile-first)
- Mantener contraste adecuado para accesibilidad

## Estructura de contenido

### Colecciones de Astro
- `sections/`: Secciones principales de la guía
- `alerts/`: Avisos y alertas para la página principal

### Frontmatter requerido para secciones
```yaml
---
title: "Título de la sección"
slug: "url-de-la-seccion"
order: 1
description: "Descripción breve"
icon: "🏠"
lastUpdated: 2025-08-02
---
```

## Consideraciones especiales

### Sensibilidad del contenido
- Este proyecto trata temas sensibles de identidad de género
- Mantener siempre un enfoque respetuoso y empático
- Verificar información legal antes de hacer cambios
- No asumir conocimiento previo del usuario

### Accesibilidad
- Usar semántica HTML correcta
- Incluir alt text en imágenes
- Mantener buen contraste de colores
- Asegurar navegación por teclado

### Performance
- Optimizar imágenes automáticamente
- Usar lazy loading cuando sea apropiado
- Minimizar JavaScript en el cliente
- Aprovechar la generación estática de Astro

## Patrones comunes

### Para crear nuevas secciones
1. Crear archivo MD en `src/content/sections/`
2. Incluir frontmatter completo
3. Usar markdown semántico
4. La página se genera automáticamente

### Para componentes de UI
1. Usar DaisyUI components como base
2. Extender con clases de Tailwind si es necesario
3. Mantener consistencia con el sistema de diseño
4. Incluir estados de hover y focus

### Para contenido CMS
1. Todo editable debe estar en colecciones
2. Usar campos apropiados en config.yml del CMS
3. Proporcionar hints y validaciones
4. Mantener estructura consistente

Cuando generes código o contenido, ten en cuenta estas guidelines y el propósito social del proyecto.
