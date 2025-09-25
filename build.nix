# build.nix - clj-nix integration for NixtaVeganic functional farm system
# Inspired by: https://github.com/jlesquembre/clj-nix (EPL-2.0, 169 stars)

{ pkgs, clj-nix, ... }:

let
  # clj-nix helpers for better Clojure + Nix integration
  cljPkgs = clj-nix.lib.${pkgs.system};
  
  # Common build inputs for all Clojure/ClojureScript builds
  baseBuildInputs = with pkgs; [
    nodejs_20    # For Shadow-CLJS and SvelteKit
    babashka     # For task orchestration
    clojure      # For Clojure compilation
    jdk17        # For JVM execution
    clj-kondo    # For static analysis
  ];

in {
  # ClojureScript DSL generator as native Clojure app
  cljs-generator = cljPkgs.mkCljApp {
    name = "nixtaveganic-cljs-generator";
    version = "0.4.0";
    src = ./site-dsl;
    main = "site.core";
    jdkRunner = pkgs.jdk17;
    
    # Enhanced with clj-nix dependency management
    buildCommand = "bb build:gen";
    
    meta = with pkgs.lib; {
      description = "ClojureScript DSL for functional farm documentation";
      homepage = "https://github.com/foolsgoldtoshi-star/foolsgoldtoshi-star-nixtaveganic-corn";
      license = licenses.unlicense;
      platforms = platforms.unix;
      maintainers = [ "foolsgoldtoshi-star" ];
    };
  };
  
  # Complete website build using clj-nix integration
  website = pkgs.stdenv.mkDerivation {
    pname = "nixtaveganic-website-clj-nix";
    version = "0.4.0";
    src = ./.;
    
    buildInputs = baseBuildInputs ++ [ 
      # Use clj-nix generated packages
      cljs-generator
    ];
    
    buildPhase = ''
      export HOME=$TMPDIR
      export PATH=${pkgs.nodejs_20}/bin:$PATH
      
      echo "🎊 Building with clj-nix integration..."
      echo "📦 Using clj-nix generator: ${cljs-generator}"
      
      # Run complete functional build pipeline
      ${pkgs.babashka}/bin/bb build:all
      
      echo "✅ clj-nix enhanced build complete"
    '';
    
    installPhase = ''
      mkdir -p $out
      cp -r web/dist/* $out/
      
      # Add clj-nix build metadata
      cat > $out/BUILD_INFO.json << EOF
      {
        "generator": "clj-nix",
        "version": "0.4.0",
        "built_with": {
          "clj-nix": "${clj-nix.rev or "latest"}",
          "babashka": "${pkgs.babashka.version}",
          "nodejs": "${pkgs.nodejs_20.version}",
          "clojure": "${pkgs.clojure.version}"
        },
        "build_date": "$(date -Iseconds)",
        "philosophy": "Rich Hickey meets NixOS meets ecological agriculture"
      }
      EOF
    '';
    
    meta = with pkgs.lib; {
      description = "Functional farm documentation system with clj-nix integration";
      homepage = "https://foolsgoldtoshi-star.github.io/foolsgoldtoshi-star-nixtaveganic-corn/";
      license = licenses.unlicense;
      platforms = platforms.unix;
    };
  };
  
  # Development tools enhanced with clj-nix
  dev-tools = pkgs.writeShellScriptBin "nixta-dev-clj-nix" ''
    echo "🎊 NixtaVeganic Development Environment (clj-nix enhanced)"
    echo "📦 clj-nix: Nix helpers for Clojure projects"
    echo "⭐ Reference: https://github.com/jlesquembre/clj-nix (169 stars)"
    echo ""
    echo "🔧 Available tools:"
    echo "  bb build:all    - Complete functional build (clj-nix enhanced)"
    echo "  bb serve        - Babashka HTTP server" 
    echo "  bb build:gen    - ClojureScript DSL → Svelte (via clj-nix)"
    echo "  nix build       - Build website package with clj-nix"
    echo ""
    echo "🖤🤎💙 Philosophy: Simple made easy, farms made functional"
  '';
}
