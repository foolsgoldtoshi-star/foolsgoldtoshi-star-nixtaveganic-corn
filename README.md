# 🌽 NixtaVeganic Corn

**Status:** Functional build system v0.1 - Rich Hickey meets NixOS approach  
**Architecture:** Nix + Babashka + ClojureScript + Svelte  
**Purpose:** Ecological farm documentation as immutable, version-controlled codebase

A Git-first, functional approach to farm planning where **documentation is code** and **builds are pure functions**. This system treats your farm proposal as data that flows through transformations to produce a beautiful, searchable website.

---

## 🎯 What This Is

- **Farm Documentation System**: No-till veganic corn farming with on-site nixtamalization
- **Functional Build Pipeline**: Parse markdown → validate with Spec → generate Svelte components → bundle SPA
- **Immutable Infrastructure**: Nix flake for reproducible environments, Babashka for fast task execution
- **Rich Hickey Philosophy**: Data-driven, pure functions, immutable state, spec validation

---

## 🏗️ Architecture

```
📁 docs/               # Source markdown files  
     ↓ (parse)
📊 EDN data            # Clojure.spec validated page data
     ↓ (generate) 
🎨 Svelte components   # Generated from ClojureScript DSL
     ↓ (bundle)
🌐 Static SPA          # Deployable website
     ↓ (serve)
🚀 Local development   # Babashka HTTP server
```

### Key Components

- **`flake.nix`**: Reproducible development environment (Babashka, Node, Clojure)
- **`bb.edn`**: Task definitions for the entire build pipeline  
- **`build/site/`**: Core libraries (parser, generator, specs)
- **`docs/`**: Farm documentation in markdown
- **`web/`**: Svelte SPA with generated components
- **`scripts/serve.clj`**: Babashka static file server

---

## 🚀 Quick Start

### Prerequisites

- [Nix](https://nixos.org/download.html) with flakes enabled
- Git

### Development Workflow

```bash
# 1. Enter reproducible development environment
nix develop

# 2. Build everything: parse docs → generate components → bundle SPA
bb build:all

# 3. Serve locally on http://localhost:8080
bb serve

# 4. Watch for changes (development mode)
bb dev
```

### Individual Tasks

```bash
# Parse markdown files and validate with Clojure.spec
bb gen:data

# Generate Svelte components from ClojureScript DSL  
bb gen:cljs

# Build Svelte SPA
bb build:svelte

# Run tests with property-based testing
bb test

# Clean all build artifacts
bb clean
```

---

## 📁 Project Structure

```
foolsgoldtoshi-star-nixtaveganic-corn/
├── flake.nix                    # Nix development environment
├── bb.edn                       # Babashka task definitions
│
├── docs/                        # Source documentation
│   ├── 00_overview.md
│   ├── 01_context_climate.md
│   ├── 04_agronomy_corn.md
│   └── 10_nixtamal_processing.md
│
├── build/site/                  # Core build system
│   ├── specs.clj               # Clojure.spec definitions
│   ├── parser.clj              # Markdown → EDN pipeline
│   └── generator.clj           # EDN → Svelte components
│
├── web/                         # Svelte SPA
│   ├── src/routes/+page.svelte  # Home page
│   ├── src/routes/wiki/[slug]/  # Dynamic wiki pages
│   ├── src/lib/generated/       # Auto-generated components
│   └── static/content/          # Generated data files
│
├── test/site/                   # Spec validation & tests
├── scripts/serve.clj            # Babashka HTTP server
└── config/                      # Farm configuration files
```

---

## ⚙️ How It Works

### 1. Parse Phase
```clojure
;; Parallel parsing with core.async
(defn parse-all-markdown []
  (let [files (find-markdown-files "docs")
        pages-ch (parse-files-async files)
        pages (async/<!! pages-ch)]
    (specs/validate-sitemap (generate-sitemap pages))))
```

### 2. Generate Phase  
```clojure
;; Pure functions: Page data → Svelte components
(defn generate-page-component [{:keys [id title hiccup]}]
  (specs/validate-page page)
  {:filename (str id ".svelte")
   :content (hiccup->svelte hiccup)})
```

### 3. Bundle Phase
```bash
# Svelte + Vite with pinned Node version
cd web && npm run build
```

### 4. Serve Phase
```clojure
;; Babashka static file server
(http/run-server (spa-handler "web/dist") {:port 8080})
```

---

## 🧪 Testing & Validation

The system uses **Clojure.spec** for runtime validation and **property-based testing**:

```bash
# Run all tests including spec validation
bb test

# Check specific specs
bb -e "(require '[site.specs :as s]) (s/validate-page {:id \"test\" :title \"Test\" :markdown \"# Test\"})"
```

### Spec Examples

```clojure
;; Page validation
(s/def ::page (s/keys :req-un [::id ::title ::markdown]
                     :opt-un [::slug ::created ::updated]))

;; Farm configuration  
(s/def ::farm-config 
  (s/keys :req-un [::latitude ::longitude ::elevation-ft]
          :opt-un [::patches]))
```

---

## 🌱 Farm Documentation

The `/docs` directory contains the complete farm planning documentation:

- **Climate & Context**: Elevation, UV index, growing zones
- **Ecological Design**: No-till methods, cover crops, biodiversity
- **Water Systems**: Spring flow, irrigation, sustainable yield
- **Agronomy**: Corn varieties, planting, veganic fertility
- **Processing**: Nixtamalization SOPs and quality control

Each markdown file becomes a searchable page in the generated website.

---

## 🔧 Extending the System

### Add New Documentation

1. Create markdown file in `docs/`
2. Run `bb gen:data` to parse and validate
3. Run `bb gen:cljs` to generate Svelte component
4. Run `bb build:svelte` to rebuild SPA

### Add New Specs

```clojure
;; In build/site/specs.clj
(s/def ::new-concept (s/keys :req-un [::required-field]))

(defn validate-new-concept [data]
  (specs/validate ::new-concept data))
```

### Customize Svelte Components

The generator produces standard Svelte components that can be customized:

```javascript
// web/src/lib/generated/example.svelte
<script>
  export let sitemap = [];
  export let pageData = {};
</script>

<!-- Generated content -->
<div class="content">...</div>
```

---

## 🎨 Design Philosophy  

### Functional Approach
- **Pure Functions**: Parser and generator are deterministic
- **Immutable Data**: All transformations preserve original sources
- **Composable**: Each phase can be run independently
- **Testable**: Spec validation at every boundary

### Rich Hickey Principles
- **Data is Better Than Code**: Configuration as EDN, not YAML
- **Simple Made Easy**: Clear separation of concerns
- **Spec Everything**: Runtime validation prevents invalid states
- **Time as First Class**: All builds are versioned and reproducible

### Nix Benefits
- **Reproducible Builds**: Same output on any machine
- **Dependency Management**: No global installs or version conflicts  
- **Rollback Support**: Easy to revert to working configurations
- **Development Environments**: Instant setup for new contributors

---

## 📊 Performance

- **Parallel Processing**: Core.async for I/O bound operations
- **Incremental Builds**: Only regenerate changed components
- **Static Assets**: No runtime dependencies in production
- **Fast Development**: Babashka for instant task startup

---

## 🤝 Contributing

This is a personal farm documentation system, but the build pipeline is designed to be reusable:

1. Fork for your own farm/project documentation
2. Modify `docs/` content for your use case  
3. Extend specs in `build/site/specs.clj`
4. Customize Svelte styling in `web/src/`

---

## 📝 License

MIT License - use this approach for your own documentation systems!

---

## 🎯 Next Steps

- [ ] **Search Integration**: Full-text search across all documentation
- [ ] **Git Integration**: Show last modified dates and contributors  
- [ ] **PDF Export**: Generate PDFs from markdown for offline use
- [ ] **Native Image**: AOT compile generator with GraalVM
- [ ] **Deploy Integration**: Automatic deployment to static hosting

---

**Built with 💛 by foolsgoldtoshi-star**

*"Simple made easy, farms made functional"*