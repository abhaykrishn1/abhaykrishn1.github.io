# abhaykrishn1.github.io
Portfolio `Plan`
- Work in dev branches, Proper PR
- User's default preference applied by default dark/light mode set
- Minification on deployed main branches

## Project Structure
The project is organized with a main minimalist theme at the root and separate directories for other theme variations:

```
.
├── index.html           # Main portfolio page (Minimalist Theme)
├── style.css            # Core styles for Minimalist Theme
├── script.js            # Core functionality for Minimalist Theme
├── minimalist/          # Contains files for the minimalist theme variant
├── visual/              # Contains files for the visual theme variant
├── interactive/         # Contains files for the interactive theme variant
├── creative/            # Contains files for the creative theme variant
├── arcade/              # Contains files for the arcade theme variant
├── README.md            # This file
├── plan.md              # Development plan
├── progress.md          # Progress tracking
└── overview.md          # Project overview documentation
```

Each theme directory (`visual/`, `interactive/`, etc.) is intended to hold the specific HTML, CSS, and JavaScript files for that theme version.

## Branching Strategy (Planned)
- `main`: Deployed version (currently reflects the minimalist theme).
- `b_test_main`: For testing features before merging.
- `b_minimalist_main`: Development branch for the minimalist theme.
- `b_visual_main`: Development branch for the visual theme.
- `b_creative_main`: Development branch for the creative theme.
- `b_arcade_main`: Development branch for the arcade theme.


## Development Stages (Planned)

### Stage 0: Setup & Base
- Set up branch structure.
- Implement theme switcher mechanism (basic links).
- Ensure default dark/light mode preference works.

### Stage 1: Theme Development
- **Minimalist:** Refine base theme (mostly complete).
- **Visual:** Implement modern simple animation effects, parallax scroll.
- **Interactive:** Add scroll-based SVG animations, interactive name/elements.
- **Creative:** Integrate Three.js effects (e.g., dynamic-neon-fill).
- **Arcade:** Mock-up basic structure.

### Stage 2: Advanced Features & Optimization
- **Visual:** Develop parallax based on nature/landscape.
- **Creative:** Implement dynamic neon fill or interactive name with cyberpunk colors.
- **Performance:** Minification, caching considerations.

### Stage 3: Testing & Deployment
- Cross-browser and device testing.
- Setup deployment via GitHub Pages.

## Reflection Points
- Performance impacts of different themes.
- Need for caching.
- Smoothness of theme switching.
