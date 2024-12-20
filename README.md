# 🏅 Personal Website with Astro

A modern, responsive personal website built with Astro and Tailwind CSS. Features a clean design with smooth transitions, interactive components, and comprehensive sections for showcasing professional experience, expertise, education, and personal information.

## 💫 Features

- Responsive design
- Interactive components for experience
- Smooth transitions
- Page views for detailed experience information
- Profile information with social links
- Hobbies and interests section

## ≺/≻ Tech Stack

- Astro
- Tailwind CSS
- TypeScript

## 💻 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🧪 Visual Regression Testing Workflow

The visual regression testing ensures UI consistency across code changes by following this process:

### Local Environment

1. **Screenshot Generation**: Running tests locally captures screenshots of the application's pages.

2. **Upload to Google Cloud Platform (GCP)**: These screenshots are uploaded to GCP, keeping the repository lightweight by avoiding large image files.

### Continuous Integration (CI) Environment

1. **Download from GCP**: During CI runs, the reference images are downloaded from GCP.

2. **Test Execution**: The current UI is compared against the downloaded reference images to detect visual discrepancies.

### Tolerance Configuration

- **Threshold** & **Max Difference Pixel Ratio**: A 0.1% tolerance is set to allow minor differences, accommodating variations between local and CI environments.

This setup maintains UI integrity while optimizing repository size.

## 🧬 Project Structure

```text
/
├── public/
│   ├── images/          # webp images for UI elements
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Content collections
│   ├── layouts/        # Page layouts templates
│   ├── pages/          # Application pages
│   └── types/          # Type definitions
│   └── utils/          # Utility functions
├── tests/
```

## 🎨 Customization

1. Update your personal information in `src/content`
2. Replace images in the `public/images` directory
3. Modify the color scheme in `tailwind.config.mjs`
4. Adjust component styles in their respective files

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open `http://localhost:4321` in your browser

## ©️ License

This work is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).
