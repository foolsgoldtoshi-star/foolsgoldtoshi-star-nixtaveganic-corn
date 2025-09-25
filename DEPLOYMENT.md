# 🌽 NixtaVeganic Deployment Guide

## GitHub Pages Setup

### 1. Repository Configuration

**Branch Structure:**
- `highvalley-wake` (default) - Production releases
- `dev-unstable` - Development sync (auto-synced with main)

**GitHub Pages Settings:**
1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. Custom domain: `nixtaveganic.foolsgoldtoshi.dev` (when ready)

### 2. Build Commands

```bash
# Local development
bb build:all     # Full build with linting and formatting
bb serve         # Serve locally on http://localhost:8080

# GitHub Pages deployment  
bb pages:build   # Build with GitHub Pages base path
bb pages:preview # Preview GitHub Pages build locally

# Branch management
bb branch:create # Create dev-unstable branch
bb branch:sync   # Sync dev-unstable with highvalley-wake
```

### 3. CI/CD Pipeline

The **GitHub Actions workflow** (`.github/workflows/ci.yml`) automatically:

1. **Lint & Validate** - clj-kondo + EDN validation + format checking
2. **Build** - Complete ClojureScript DSL → Svelte → static site
3. **Test** - Clojure.spec property-based testing
4. **Deploy** - GitHub Pages deployment (highvalley-wake only)
5. **Sync** - Auto-sync dev-unstable branch

### 4. Deployment URLs

- **Production**: https://foolsgoldtoshi-star.github.io/foolsgoldtoshi-star-nixtaveganic-corn/
- **Custom Domain**: https://nixtaveganic.foolsgoldtoshi.dev (when configured)

## Development Workflow

### With Nix (Recommended)
```bash
# Enter reproducible environment
nix develop

# Full development cycle
bb build:all && bb serve
```

### Without Nix (Current)
```bash
# Direct Babashka usage
bb build:all && bb serve
```

## Features

### 🎨 Warm Theme System
- **Light Sage**: Inspired by f.lux warm lighting
- **Dark Jade**: Jade-aquamarine with warm accents
- **Dynamic Toggle**: Persisted user preference
- **CSS Custom Properties**: Smooth theme transitions

### 🌍 Internationalization
- **Path-based**: `/en/` and `/es/` URL structure  
- **Component-level**: All text externalized to translation files
- **Language Toggle**: Persistent language switching
- **SEO-ready**: Proper `<html lang="">` attributes

### 📱 Responsive Design
- **Mobile-first**: Optimized for all screen sizes
- **Touch-friendly**: Large touch targets, smooth animations
- **Performance**: Static site generation for fast loading

## Branch Strategy

### highvalley-wake (Default/Production)
- Protected branch
- Requires PR for changes
- Triggers full CI/CD pipeline
- Deploys to GitHub Pages

### dev-unstable (Development)
- Auto-synced with highvalley-wake after successful deployments
- Used for experimental features
- Can be used for preview deployments

## Repository Pattern

This deployment pattern is designed to be **reusable across all foolsgoldtoshi-star repositories**:

1. **ClojureScript DSL** for content generation
2. **Warm theme system** with light/dark modes
3. **Internationalization** with path-based routing
4. **GitHub Actions CI/CD** with comprehensive testing
5. **Branch sync strategy** for stable development

## Performance Optimizations

- **Static Site Generation**: No runtime JavaScript dependencies
- **Asset Optimization**: Vite bundling with code splitting
- **CDN-ready**: All assets optimized for GitHub Pages CDN
- **Caching**: Proper cache headers for static assets

## Monitoring & Analytics

```bash
# Build size monitoring
du -sh web/dist/

# Performance testing
bb pages:preview  # Test locally before deployment

# Dependency auditing  
nix flake check   # Verify all dependencies
```

## Troubleshooting

### Build Issues
```bash
bb clean          # Clean all artifacts
bb fmt:write      # Fix formatting
bb lint:kondo     # Check for code issues
```

### Deployment Issues
- Verify GitHub Pages is enabled in repository settings
- Check that GitHub Actions have proper permissions
- Confirm base path matches repository name

### Theme Issues
- Check CSS custom properties are loading
- Verify theme store initialization
- Test theme toggle functionality

## Security

- **No secrets in repository**: All configuration is public
- **Nix reproducibility**: Exact dependency versions pinned
- **Static deployment**: No server-side attack surface
- **HTTPS enforced**: GitHub Pages provides SSL automatically
