# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VXTeaser is a React-based teaser/banner component library for creating dynamic promotional content. The library provides two main component suites: `BannerSuite` for banner-style teasers with fixed heights and responsive breakpoints, and `TileSuite` for tile-based layouts. The library supports autoplay functionality, user interactions (hover, click), and JSON-driven content rendering.

## Development Setup

### Prerequisites
- Node.js 18+
- npm

### Initial Setup
```bash
npm install
npm run build  # Initial build
```

### Development Workflow
For active development, run these in separate terminals:
```bash
npm run watch     # Auto-rebuild on file changes
npm run storybook # Component development server (http://localhost:8081)
```

## Development Commands

### Building
- `npm run build` - Build the library using webpack
- `npm run build:all` - Build both library and storybook
- `npm run watch` - Build with file watching enabled

### Testing
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

### Development Tools
- `npm run storybook` - Start Storybook dev server on port 8081
- `npm run storybook:build` - Build static Storybook for production
- `npm run styleguide` - Start React Styleguidist server
- `npm run styleguide:build` - Build static style guide documentation (requires prebuild step)

### Bundle Analysis
Use the following command to analyze package sizes:
```bash
node_modules/.bin/webpack --json | ./node_modules/.bin/webpack-bundle-size-analyzer
```

## Architecture

### Core Components
- **BannerSuite** (`src/components/BannerSuite.js`) - Main banner component with responsive height handling, autoplay, and navigation controls (arrows, dots)
- **TileSuite** (`src/components/TileSuite.js`) - Tile-based component suite with aspect ratio management
- **Builder** (`src/utils/Builder.js`) - Factory function that creates banner/tile instances using the Processor
- **Processor** (`src/utils/Processor.js`) - Core JSON-to-React conversion engine that traverses configuration objects and creates React elements

### Content Components
All content components are located in `src/components/Content/` and include:
- Banner, Button, CloseButton, Column, Headline, Img, Link, Panel, PanelGroup, PanelSkew, Row, Text, Tile, etc.

### Utilities
- **ElementFactory** (`src/utils/ElementFactory.js`) - Maps component names to React components
- **Constants** (`src/utils/Constants.js`) - Shared constants and class names
- **LinkHandler** (`src/components/LinkHandler.js`) - Handles click events and navigation

### Configuration Processing
Both BannerSuite and TileSuite process configuration objects through static `processConfigs()` methods that normalize data structure:
- BannerSuite processes `fixedHeights` with responsive breakpoints
- TileSuite processes `aspectRatio` for tile layouts

### Entry Points
- **Main Library** (`src/lib.js`) - Exports BannerSuite, TileSuite, Constants, and renderNode
- **Playground** (`src/playground.js`) - Development/testing entry point

### Build Configuration
The webpack config (`webpack.config.js`) supports:
- UMD library output with external React/ReactDOM dependencies
- Separate CSS extraction via MiniCssExtractPlugin
- LESS and CSS processing with PostCSS
- Both standalone and bundled build types

### Testing Setup
Jest configuration uses jsdom environment and includes @testing-library/jest-dom for DOM assertions. Tests are organized in `__tests__/` directory with snapshot testing for components.

## Data Flow and Processing

### JSON Configuration Processing
The library follows a Factory + Processor pattern for converting JSON configurations to React components:

1. **Configuration Input** - JSON objects define component structure, styles, and content
2. **Processor** (`src/utils/Processor.js`) - Recursively traverses JSON and converts to React elements
3. **ElementFactory** (`src/utils/ElementFactory.js`) - Maps component names to actual React components
4. **Builder** (`src/utils/Builder.js`) - Factory functions that orchestrate the conversion process

### Component Registration
New content components must be registered in ElementFactory.js to be available in JSON configurations. All components follow consistent prop patterns and use Constants.js for CSS class naming.

### Responsive Configuration
- **BannerSuite**: Uses `fixedHeights` object with breakpoint keys (mobile, tablet, desktop)
- **TileSuite**: Uses `aspectRatio` for maintaining consistent tile proportions
- Both process configurations through static `processConfigs()` methods

## Styling System

### LESS Architecture
- Base styles in `src/less/` directory
- Component-specific styles follow BEM-like naming conventions
- CSS class constants defined in `src/utils/Constants.js`
- PostCSS with Autoprefixer for cross-browser compatibility

### Build Output
- **Standalone build**: Externalizes React/ReactDOM for smaller bundle size
- **Bundled build**: Includes all dependencies for self-contained distribution
- **UMD format**: Compatible with CommonJS, AMD, and global browser usage

## Troubleshooting

### Styleguide Issues
The `npm run styleguide` command depends on the prebuild step that creates CSS modifier documentation:
- Requires `docs/` directory to exist
- Runs `styleguide-prebuild.sh` to generate `docs/css-modifiers.md`
- If failing, ensure the `docs/` directory exists and the prebuild script has execute permissions

### Common Development Issues
- **Peer dependency warnings**: React 18+ is required as peer dependency
- **Build failures**: Ensure all LESS files have valid syntax
- **Storybook issues**: Check that component stories are properly configured
- **Test failures**: Verify Jest configuration matches component export patterns