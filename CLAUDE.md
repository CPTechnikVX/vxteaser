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
- `npx jest --testPathPattern=<filename>` - Run a single test file (e.g. `npx jest --testPathPattern=Processor`)

### Development Tools
- `npm run storybook` - Start Storybook dev server on port 8081
- `npm run storybook:build` - Build static Storybook for production
- `npm run styleguide` - Start React Styleguidist server
- `npm run styleguide:build` - Build static style guide documentation (runs `styleguide:prebuild` first)

### Bundle Analysis
Use the following command to analyze package sizes:
```bash
node_modules/.bin/webpack --json | ./node_modules/.bin/webpack-bundle-size-analyzer
```

## Architecture

### Core Components
- **BannerSuite** (`src/components/BannerSuite.js`) - Main banner component with responsive height handling, autoplay, and navigation controls (arrows, dots)
- **TileSuite** (`src/components/TileSuite.js`) - Tile-based component suite with aspect ratio management
- **Provider** (`src/components/Provider.js`) - Loads configs from a remote VXQL (GraphQL) endpoint and injects them as `configs` prop into child components; not exported from the main library entry point
- **Builder** (`src/utils/Builder.js`) - Factory function that creates banner/tile instances using the Processor
- **Processor** (`src/utils/Processor.js`) - Core JSON-to-React conversion engine that traverses configuration objects and creates React elements

### Content Components
All content components are in `src/components/Content/` and are registered in `ElementFactory.js`. To add a new content component, create the component file and add a `case` for it in `ElementFactory.getForName()`.

### Utilities
- **ElementFactory** (`src/utils/ElementFactory.js`) - Maps component names to React components via a `switch` on `Constants.Element` keys
- **Constants** (`src/utils/Constants.js`) - CSS class names (`ClassName`), element type string keys (`Element`), CSS prefix classes (`PrefixClassName`), and hook types (`HookType`)
- **LinkHandler** (`src/components/LinkHandler.js`) - Default click handler; overrideable via `onClickFn` prop
- **Query** (`src/utils/Query.js`) - VXQL connector: sends GraphQL queries with Bearer token auth to a configured endpoint

### Entry Points
- **Main Library** (`src/lib.js`) - Exports `BannerSuite`, `TileSuite`, `Constants`, and `renderNode`
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

### JSON Configuration Format
The Processor traverses a nested JSON object where keys are element type names (matching `Constants.Element` values). Each node can have:
- `@attributes` - object of props spread onto the component
- `@value` - string/primitive used as children (overrides nested traversal)
- Numeric keys (`"0"`, `"1"`, …) - arrays of same-type siblings

Example config excerpt:
```json
{
  "banner": {
    "skewpanelgroup": {
      "panel": {
        "0": { "row": { "col": { "headline": { "@value": "Title", "@attributes": { "size": "2.6rem" } } } } },
        "1": { "row": { "col": { "link": { "@value": "Click me", "@attributes": { "url": "link:SomePage", "type": "button" } } } } },
        "@attributes": { "width": "45%" }
      }
    }
  }
}
```

### Component Registration
New content components must be registered in `ElementFactory.js` (`src/utils/ElementFactory.js`) to be available in JSON configurations. All components follow consistent prop patterns and use `Constants.js` for CSS class naming.

### Responsive Configuration
- **BannerSuite**: `processConfigs()` maps raw config fields into `fixedHeights` array with two breakpoint entries (`greaterThan`, `height`, `backgroundUrl`)
- **TileSuite**: `processConfigs()` uses `aspectRatio` for maintaining consistent tile proportions

### Remote Config Loading (Provider)
`Provider` accepts a `config` prop with `{ vxqlEndpoint, vxqlWebToken, id }`, queries the VXQL GraphQL API on mount, parses the `typeConfig` JSON field, and passes the result as `configs` to its child components.

## Styling System

### LESS Architecture
- Base styles in `src/less/` directory
- Component-specific styles follow BEM-like naming conventions using `vxteaser-` prefix
- CSS class constants defined in `src/utils/Constants.js` (`ClassName` and `PrefixClassName`)
- PostCSS with Autoprefixer for cross-browser compatibility

### Build Output
- **Standalone build**: Externalizes React/ReactDOM (peer dep: React ^19.2.0)
- **Bundled build**: Includes all dependencies for self-contained distribution
- **UMD format**: Compatible with CommonJS, AMD, and global browser usage

## Troubleshooting

### Styleguide Issues
The `npm run styleguide` command depends on the prebuild step that creates CSS modifier documentation:
- Requires `docs/` directory to exist
- Runs `styleguide-prebuild.sh` (via `npm run styleguide:prebuild`) to generate `docs/css-modifiers.md`
- If failing, ensure the `docs/` directory exists and the prebuild script has execute permissions

### Common Development Issues
- **Build failures**: Ensure all LESS files have valid syntax
- **Storybook issues**: Check that component stories are properly configured
- **Test failures**: Verify Jest configuration matches component export patterns
