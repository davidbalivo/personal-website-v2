# Personal Website with Astro

A modern, responsive personal website built with Astro and Tailwind CSS. Features a clean design with smooth transitions, interactive timeline components, and comprehensive sections for showcasing professional experience, skills, and personal information.

## 🚀 Features

- Responsive design
- Interactive timeline for experience and education
- Smooth transitions
- Page views for detailed experience information
- Profile information with social links
- Hobbies and interests section

## 🛠️ Tech Stack

- Astro
- Tailwind CSS
- TypeScript

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## 📝 Project Structure

```text
/
├── public/
│   ├── icons/          # SVG icons for UI elements
│   └── images/         # Project images
├── src/
│   ├── components/     # Reusable UI components
│   ├── data/          # CV data and content
│   ├── layouts/       # Page layouts
│   ├── pages/         # Application pages
│   └── utils/         # Utility functions
└── package.json
```

## 🎨 Customization

1. Update your personal information in `src/data/index.ts`
2. Replace images in the `public/images` directory
3. Modify the color scheme in `tailwind.config.mjs`
4. Adjust component styles in their respective files

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies with `bun install`
3. Start the development server with `bun run dev`
4. Open `http://localhost:4321` in your browser