# 🏳️‍⚧️ Gender Change Legal Guide - Argentina

> A comprehensive community-driven guide for legal name and gender change in Argentina

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## 🌟 About

This project is a **community-created guide** for trans, travesti, and non-binary people in Argentina who want to legally change their name and gender. The guide provides step-by-step instructions, legal information, and resources to navigate the bureaucratic process.

### ✨ Key Features

- 📱 **Mobile-first design** - Optimized for smartphones
- 🆓 **Completely free** - No paywalls or restrictions
- 🔄 **Always updated** - Community-maintained with latest legal changes
- 🌐 **Accessible** - WCAG 2.1 AA compliance
- 📝 **Content management** - Easy editing via Netlify CMS
- 🚀 **Fast loading** - Static site generation with Astro

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **Styling**: [TailwindCSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- **Content**: Markdown with frontmatter
- **CMS**: [Netlify CMS](https://www.netlifycms.org/) for content management
- **Hosting**: [Netlify](https://netlify.com)
- **Language**: Spanish (Argentina)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/guia-cambio-genero.git
   cd guia-cambio-genero
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:4321
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 📁 Project Structure

```
guia-cambio-genero/
├── public/
│   ├── admin/           # Netlify CMS configuration
│   │   ├── config.yml   # CMS configuration
│   │   └── index.html   # CMS entry point
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections
│   │   ├── sections/    # Guide sections (markdown)
│   │   └── alerts/      # Site alerts
│   ├── layouts/         # Page layouts
│   ├── pages/           # Static pages
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json
```

## 📝 Content Management

### Adding New Content

#### Method 1: Netlify CMS (Recommended)

1. **Access the CMS**: Visit `/admin/` on your deployed site
2. **Login**: Use your Netlify Identity credentials
3. **Create content**: Use the visual editor to add new sections
4. **Publish**: Changes are automatically committed to Git

#### Method 2: Direct File Editing

1. **Create a markdown file** in `src/content/sections/`
2. **Add frontmatter**:
   ```yaml
   ---
   title: "Section Title"
   slug: "section-url"
   order: 1
   description: "Brief description"
   icon: "🏠"
   lastUpdated: 2025-08-02
   ---
   ```
3. **Write content** in Markdown below the frontmatter
4. **Commit and push** to deploy

### Content Structure

Each section requires:
- `title`: Display name
- `slug`: URL-friendly identifier
- `order`: Sort order (1-9)
- `description`: Brief summary
- `icon`: Emoji or symbol
- `lastUpdated`: ISO date format

## 🎨 Styling Guide

### Design System

- **Colors**: DaisyUI theme system
- **Typography**: Inter font family
- **Components**: DaisyUI components with Tailwind utilities
- **Responsive**: Mobile-first approach
- **Accessibility**: High contrast, keyboard navigation

### Custom Classes

```css
/* Example custom utilities */
.prose-custom {
  @apply prose prose-lg max-w-none;
}

.card-hover {
  @apply hover:scale-105 transition-transform duration-300;
}
```

## 🔧 Configuration

### Astro Config

Key configurations in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://guia-cambio-genero.netlify.app',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es']
  }
});
```

### Netlify CMS Config

Configure content types in `public/admin/config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main

collections:
  - name: "sections"
    label: "Secciones"
    folder: "src/content/sections"
    # ... field definitions
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Enable Netlify Identity** for CMS access
4. **Configure Git Gateway** for content editing

### Other Platforms

The site can be deployed to any static hosting platform:
- Vercel
- GitHub Pages  
- AWS S3 + CloudFront
- Azure Static Web Apps

## 👥 Contributing

We welcome contributions from the community! This guide is by and for the trans, travesti, and non-binary community.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-section`
3. **Make your changes**
4. **Test locally**: `npm run dev`
5. **Submit a pull request**

### Content Guidelines

- **Language**: Spanish (Argentina)
- **Tone**: Respectful, direct, and friendly
- **Audience**: All ages and technical levels
- **Updates**: Verify legal information before changes
- **Sensitivity**: Handle gender identity topics with care

### Areas for Contribution

- 📄 Content updates and corrections
- 🐛 Bug fixes and improvements
- 🎨 Design and accessibility enhancements
- 🌐 SEO optimization
- 📱 Mobile experience improvements

## 📚 Resources

### Legal Framework

- [Ley de Identidad de Género 26.743](https://servicios.infoleg.gob.ar/infolegInternet/anexos/195000-199999/197860/norma.htm)
- [Decreto 476/21 "DNI X"](https://servicios.infoleg.gob.ar/infolegInternet/anexos/350000-354999/352187/norma.htm)
- [Código Electoral](https://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/19442/texact.htm)

### Support Organizations

- **Defensoría LGBT**: defensoria@lgbt.org.ar
- **INADI**: 4380-5600 / 5700
- **Línea 148**: Registry issues (free)

## ⚖️ Legal Notice

**Important**: This guide is for informational purposes only and does not replace professional legal advice. Always verify the most current information with the relevant institutions.

The guide does not belong to any institution, has no copyright restrictions, and encourages free reproduction and printing.

## 📞 Contact

- **Email**: acevedopippin@gmail.com
- **Issues**: Create a GitHub issue
- **Instagram**: @guiacambiogenero

## 📄 License

This project is **open source** and **copyright-free**. Feel free to:
- ✅ Use the content
- ✅ Modify and adapt
- ✅ Redistribute freely
- ✅ Print and share

## 🙏 Acknowledgments

This guide was created by and for the trans, travesti, and non-binary community in Argentina. Special thanks to all community members who contributed information, feedback, and support.

---

**"Our identities are valid, our rights are real."**

*Last updated: August 2025*
