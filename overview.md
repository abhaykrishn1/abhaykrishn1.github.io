# Portfolio Project Overview

## Project Structure
This portfolio project showcases the skills and experience of Abhay Krishna, an AI Engineer. It features a multi-theme approach, allowing visitors to experience the portfolio in different visual styles. The main project is structured as follows:

```
.
├── index.html           # Main portfolio page (Minimalist Theme)
├── css/                 # Base CSS files
│   ├── base.css
│   ├── themes.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── script.js            # Base JavaScript functionality
├── minimalist/          # Minimalist theme (currently same as root)
│   └── ... (potentially theme-specific overrides)
├── visual/
│   ├── index.html
│   ├── css/             # Copied base CSS + visual-theme.css
│   └── script.js
├── interactive/
│   ├── index.html
│   ├── css/             # Copied base CSS + interactive-theme.css
│   ├── js/              # Interactive-specific JS
│   │   └── interactive-script.js
│   └── script.js
├── creative/
│   ├── index.html
│   ├── css/             # Copied base CSS + creative-theme.css
│   └── script.js
└── arcade/
    ├── index.html
    ├── css/             # Copied base CSS + arcade-theme.css
    ├── js/              # Arcade-specific JS
    │   └── arcade-script.js
    └── script.js
```

## Features

### Core Features
- **Responsive Design**: Adapts to different screen sizes.
- **Theme Switching**: Links to different theme directories.
- **Dark/Light Mode**: Automatically applies system preference on the minimalist theme.
- **Animated Sections**: Content sections animate on scroll (customized per theme).
- **Scroll Progress Bar**: Visual indicator of scroll progress.
- **Resume Download**: Link to the latest PDF resume.
- **Updated Content**: Sections populated with data from `personal-data.txt`.

### Theme Variations

1.  **Minimalist Theme (Root)**
    *   Clean, professional design with multiple color schemes (Ocean, Forest, Sunset, Lavender, Midnight) selectable via a dropdown.
    *   Focus on content and readability.
    *   CSS refactored into smaller, manageable files.

2.  **Visual Theme (`visual/`)**
    *   Elegant, nature-inspired palette.
    *   CSS Parallax background effect (requires image).
    *   Smooth slide-in animations for sections.

3.  **Interactive Theme (`interactive/`)**
    *   Modern, engaging palette with gradient borders.
    *   Interactive hover effects on sections and links.
    *   Clickable name element with simple color change effect.

4.  **Creative Theme (`creative/`)**
    *   Cyberpunk/Neon aesthetic with a dark background and vibrant colors.
    *   Monospace font and neon glow text effects.
    *   Subtle background grid pattern.
    *   Placeholder canvas for potential Three.js integration.

5.  **Arcade Theme (`arcade/`)**
    *   Retro 8-bit styling with pixel font and blocky shadows/borders.
    *   Arcade-themed section titles.
    *   Basic button hover/active states mimicking game buttons.

## Implementation Details

### CSS Structure
The core CSS has been refactored from a single `style.css` into multiple files within the `css/` directory for better organization:
- `base.css`: Resets and basic element styles.
- `themes.css`: Color variable definitions for minimalist theme color options.
- `layout.css`: Container, header, footer, section layout.
- `components.css`: Styles for specific elements like buttons, badges, etc.
- `animations.css`: Default scroll animations.
- `responsive.css`: Media queries.

Each theme directory (`visual/`, `interactive/`, etc.) contains a copy of the base `css/` directory and adds its own theme-specific stylesheet (e.g., `visual/css/visual-theme.css`) which overrides or extends the base styles.

### Theming System
The minimalist theme uses CSS variables for color switching. Other themes define their primary look in their respective `*-theme.css` file.

### Animation System
Base animations use CSS transitions and IntersectionObserver. Themes can override or customize animations in their specific CSS files (e.g., `visual/css/animations.css`).

### User Preference Storage
Minimalist theme color preference is stored in localStorage.

## Future Enhancements
- Implement actual JavaScript-driven parallax for `visual/` theme for better cross-browser compatibility.
- Add more complex JavaScript interactions for `interactive/` theme (e.g., SVG animations, letter animations).
- Integrate basic Three.js scene in `creative/` theme.
- Add sound effects or more game-like JS interactions to `arcade/` theme.
- Further optimization for performance (minification, image optimization, lazy loading).
- Cross-browser testing and deployment setup.

## Additional Resources
- Resume: [Abhay_Krishna_resume_AI_Engineer_feb_14.pdf](../Abhay_Krishna_resume_AI_Engineer_feb_14.pdf)
- GitHub: [github.com/abhaykrishn1](https://github.com/abhaykrishn1) 