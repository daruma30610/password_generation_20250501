# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run deploy   # Build and deploy to GitHub Pages
```

### Initial Setup
```bash
npm install      # Install dependencies
```

## Architecture

This is a Vue 3 + Vite project using:
- **Vue Router 4** for client-side routing
- **Pinia** for state management (stores in `src/stores/`)
- **Composition API** with `<script setup>` syntax
- **@ alias** points to `src/` directory

### Key Directories
- `src/views/` - Page-level components
- `src/components/` - Reusable components
- `src/router/` - Route definitions
- `src/stores/` - Pinia state stores

### Important Files
- `vite.config.js` - Build configuration and path aliases
- `src/main.js` - Application entry point, mounts Vue app
- `src/router/index.js` - Route definitions with lazy loading

## Development Notes

- No testing framework configured (consider adding Vitest)
- No linting/formatting tools configured (consider adding ESLint/Prettier)
- CSS uses scoped styles in components and global styles in `src/assets/`
- Vue DevTools plugin is included for debugging

## Documentation

- Application flow and sequence diagrams: See [@/sequence.md](sequence.md)