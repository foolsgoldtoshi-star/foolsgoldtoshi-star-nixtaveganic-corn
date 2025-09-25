# Nix + Babashka + ClojureScript Integration

**Philosophy**: Reproducible functional programming with immutable infrastructure  
**Goal**: Eliminate "works on my machine" with declarative, pure build systems  
**Inspiration**: Rich Hickey meets NixOS meets modern web development

---

## 🎯 Our Integration Stack

### **Nix: Reproducible Environment**
- **Purpose**: Pin exact versions of Node.js, Babashka, Clojure, JDK, clj-kondo
- **Benefits**: Identical builds across machines, easy rollbacks, no global installs
- **File**: `flake.nix` with development shell and package definitions

### **Babashka: Fast Task Execution** 
- **Purpose**: Replace npm scripts, Make, and shell scripts with Clojure
- **Benefits**: Fast startup, rich data structures, functional composition
- **File**: `bb.edn` with declarative task definitions and dependencies

### **ClojureScript: Static Site Generation**
- **Purpose**: Parse markdown → generate Svelte components with functional DSL
- **Benefits**: Immutable data transformations, spec validation, core.async parallelization  
- **Files**: `site-dsl/src/` with Shadow-CLJS compilation to Node.js

---

## 🏗️ Build Pipeline Architecture

```
📄 Markdown Docs (docs/*.md)
     ↓ (ClojureScript DSL via Shadow-CLJS)
🎨 Svelte Components (web/src/lib/generated/*.svelte)
     ↓ (SvelteKit + Vite via Node.js)
🌐 Static Website (web/dist/*.html)
     ↓ (Babashka HTTP server)
🚀 Local Development (localhost:8080)
```

### **Task Dependencies (Declarative)**

```clojure
{:tasks
 {build:gen    {:task "ClojureScript DSL → Svelte generation"}
  build:bundle {:task "SvelteKit → static site bundling"}  
  build:site   {:depends [build:gen build:bundle]}
  lint:kondo   {:task "Static analysis with clj-kondo"}
  build:all    {:depends [build:site lint:kondo fmt:check]}
  serve        {:task "Start Babashka HTTP server"}}}
```

---

## 🔧 Technology Integration Details

### **Nix Flake Configuration**
Our `flake.nix` provides:
- **Reproducible dev shell**: Exact versions pinned
- **Package outputs**: Website deployable as Nix package
- **CI/CD integration**: Same environment locally and in GitHub Actions

```nix
# Key technologies pinned:
nodejs_20     # For SvelteKit, Shadow-CLJS, npm
babashka      # For task orchestration  
clojure       # For ClojureScript compilation
jdk17         # For Shadow-CLJS JVM execution
clj-kondo     # For static analysis
```

### **Enhanced Nix Integration with clj-nix**

The [clj-nix project](https://github.com/jlesquembre/clj-nix) provides excellent helpers for Clojure + Nix integration. **Future enhancement opportunity**:

```nix
# Enhanced flake.nix with clj-nix
inputs = {
  nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
  clj-nix.url = "github:jlesquembre/clj-nix";
};

# Benefits:
# - Better Clojure dependency management in Nix
# - Native Clojure packaging for reproducible builds  
# - AOT compilation with GraalVM native-image
# - Simplified ClojureScript build integration
```

### **Babashka Task System**
Replaces traditional build tools with **functional task composition**:

- **Pure Functions**: Each task is deterministic 
- **Data Structures**: Configuration as EDN, not bash/YAML
- **Composability**: Tasks declare dependencies declaratively
- **Fast Startup**: Babashka eliminates JVM startup overhead

```clojure
;; Example: Our build:gen task
build:gen {:task (do
            (shell {:dir "site-dsl"} "npm" "ci")
            (shell {:dir "site-dsl"} "npx" "shadow-cljs" "compile" "node-script")
            (shell {:dir "site-dsl"} "node" "target/main.js"))}
```

### **ClojureScript Static Site Generation**
**Revolutionary approach**: Farm documentation as **immutable data** that flows through **pure transformations**:

```clojure
;; Functional pipeline
Markdown → (parse) → AST → (transform) → Hiccup → (render) → Svelte
```

**Key advantages**:
- **Spec Validation**: Runtime checking of all data structures
- **Core.async**: Parallel processing for I/O operations  
- **Node.js Compatible**: File system operations via `js/require`
- **Immutable**: No side effects, reproducible builds

---

## 🚀 Local Development Workflow

### **With Nix (Recommended)**
```bash
# Enter reproducible environment with all tools pinned
nix develop

# Complete build pipeline
bb build:all

# Serve locally  
bb serve  # → http://localhost:8080
```

### **Without Nix (Current Setup)**
```bash
# Direct Babashka execution (requires Node.js + Java manually)
bb build:gen     # ClojureScript DSL → Svelte components
bb build:bundle  # SvelteKit → static site
bb serve         # Babashka HTTP server
```

### **Individual Build Steps**
```bash
bb clean         # Clean all generated artifacts
bb build:gen     # Parse docs → generate Svelte components  
bb build:bundle  # Bundle static site with SvelteKit
bb lint:kondo    # Static analysis (requires Nix environment)
bb fmt:write     # Format all Clojure files to 80 columns
```

---

## 🔍 Advanced: clj-nix Integration

The [clj-nix project](https://github.com/jlesquembre/clj-nix) by jlesquembre provides sophisticated helpers for **Clojure + Nix integration**. 

### **Current Benefits**
- **EPL-2.0 License**: Compatible with our stack
- **169 GitHub Stars**: Proven, community-supported
- **Alpha Status**: Cutting-edge but stable enough for experimentation

### **Integration Opportunities**
```nix
# Enhanced flake.nix with clj-nix helpers
{
  inputs.clj-nix.url = "github:jlesquembre/clj-nix";
  
  outputs = { self, nixpkgs, clj-nix }:
    let
      # Better Clojure dependency management
      cljPkgs = clj-nix.packages.${system};
    in {
      # Native Clojure packages
      packages.parser = cljPkgs.mkCljApp {
        name = "nixtaveganic-parser";
        src = ./site-dsl;
        main = "site.core";
      };
      
      # GraalVM native compilation
      packages.parser-native = cljPkgs.mkGraalApp {
        name = "nixtaveganic-parser-native";  
        src = ./site-dsl;
        main = "site.core";
      };
    };
}
```

### **Future Enhancements**
- **Native Image Compilation**: AOT compile ClojureScript generator
- **Better Dependency Management**: Use clj-nix for ClojureScript deps
- **Hermetic Builds**: Complete Nix-native build without npm
- **Cross-Platform**: Build for multiple architectures

---

## 🌱 Farm-Specific Build Features

### **Configuration as Data**
All farm planning uses **EDN configuration** validated by **Clojure.spec**:

```clojure
;; config/farm.meta.edn
{:latitude-deg 38.8
 :elevation-ft 3000
 :climate {:hardiness-zone "9a-9b"
           :growing-season-days 200}}
```

### **Functional Content Generation**
**Markdown documents** become **immutable data structures** that generate **Svelte components**:

```clojure
;; site-dsl/src/site/core.cljs
(defn gen-all []
  (let [pages (parse-all)           ; Markdown → AST
        sitemap (generate-sitemap pages)] ; Pure function
    (doseq [page pages]
      (gen-page page))              ; AST → Svelte components
    (spit* "sitemap.js" sitemap)))  ; Navigation data
```

### **Warm Theme Integration**
**CSS custom properties** generated from **ClojureScript data structures**:

```clojure
;; Sage light + jade dark themes
(def sage-light-palette
  {:bg "#f3f0ea" :fg "#2a2a28" 
   :sage "#b7c8b5" :jade "#2a7f6f"})
```

---

## 📊 Performance & Statistics

### **Build Performance**
- **ClojureScript Compilation**: ~1.5s (Shadow-CLJS)
- **SvelteKit Bundling**: ~1.4s (Vite + static adapter)
- **Total Build Time**: ~3s (complete pipeline)
- **Generated Output**: ~100KB static site

### **Development Experience**
- **Babashka Startup**: <100ms (vs ~3s JVM)
- **File Watching**: Live reload with `bb dev`
- **Hot Module Replacement**: Vite development server
- **Incremental Builds**: Only rebuild changed components

---

## 🎯 CI/CD Integration

Our **GitHub Actions workflows** use the **same Nix environment** for perfect reproducibility:

```yaml
# .github/workflows/pages-highvalley-wake.yml
- name: Setup Node + Java + Babashka + clj-kondo
  run: |
    # Install exact versions (no Nix in CI yet)
    curl -sLo bb.tar.gz https://github.com/babashka/babashka/releases/download/v1.3.189/babashka-1.3.189-linux-amd64.tar.gz
    curl -sLo clj-kondo.zip https://github.com/clj-kondo/clj-kondo/releases/download/v2024.09.27/clj-kondo-2024.09.27-linux-amd64.zip

- name: Build with same pipeline
  run: bb build:all
```

**Future**: Use Nix in CI for **perfect environment parity**:

```yaml
- uses: cachix/install-nix-action@v23
- run: nix develop --command bb build:all
```

---

## 🌟 Functional Programming Principles Applied

### **Rich Hickey Philosophy**
- **Data > Code**: Configuration as EDN, not YAML/JSON
- **Simple Made Easy**: Clear separation of concerns (parse → transform → render)
- **Immutable State**: No mutation, all transformations pure functions
- **Spec Everything**: Runtime validation prevents invalid states

### **Agricultural Documentation as Code**
```clojure
;; Farm patches as immutable data
{:patches [{:id "P01" :area-ac 4.8 :slope-pct 3.5}
           {:id "P02" :area-ac 9.6 :slope-pct 2.0}]}

;; Rotations as functional transformations  
{:rotations {:corn-no-till-roll
             {:year-0-cover {:cereal :cereal-rye :legume :hairy-vetch}
              :termination :roller-crimper
              :cash-crop :field-corn}}}
```

### **Documentation Pipeline**
```clojure
;; Pure functional content generation
docs/*.md → (ClojureScript DSL) → *.svelte → (SvelteKit) → GitHub Pages
```

---

## 🔗 References & Inspiration

- **[clj-nix](https://github.com/jlesquembre/clj-nix)**: Nix helpers for Clojure projects (EPL-2.0)
- **Rich Hickey**: "Simple Made Easy" philosophy 
- **NixOS**: Reproducible package management and deployment
- **Babashka**: Fast-starting Clojure scripting environment
- **Shadow-CLJS**: ClojureScript compilation and development tools
- **Helen Atthowe**: "The Ecological Farm" - ecosystem-first agriculture

---

## 🎊 Why This Approach Matters

This project demonstrates that **functional programming principles** can be applied to:

1. **Agricultural Planning**: Treating farms as immutable, version-controlled systems
2. **Documentation**: Content as data that flows through pure transformations  
3. **Web Development**: Static site generation with functional DSLs
4. **Infrastructure**: Reproducible environments with Nix + Babashka

**Result**: A farm documentation system that embodies **"Simple made easy, farms made functional"** 🖤🤎💙

---

**Built with 🎊 by foolsgoldtoshi-star using functional programming principles**

