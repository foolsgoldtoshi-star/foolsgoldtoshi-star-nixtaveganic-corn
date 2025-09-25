{
  description = "NixtaVeganic Corn - Functional Farm with clj-nix integration";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
    clj-nix.url = "github:jlesquembre/clj-nix";
  };

  outputs = { self, nixpkgs, flake-utils, clj-nix }:
    flake-utils.lib.eachDefaultSystem (system:
      let 
        pkgs = import nixpkgs { 
          inherit system; 
          overlays = [ clj-nix.overlays.default ];
        };
        # clj-nix helpers for better Clojure integration
        cljPkgs = clj-nix.lib.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_20
            pkgs.babashka
            pkgs.clojure
            pkgs.jdk17
            pkgs.clj-kondo          # ← lint
          ];
        };

        # Native Clojure packages using clj-nix helpers
        packages.cljs-generator = cljPkgs.mkCljApp {
          name = "nixtaveganic-cljs-generator";
          src = ./site-dsl;
          main = "site.core";
          jdkRunner = pkgs.jdk17;
        };
        
        # Import clj-nix enhanced build definitions
        cljNixBuilds = import ./build.nix { inherit pkgs clj-nix; };
        
        packages = {
          default = cljNixBuilds.website;
          website = cljNixBuilds.website;
          cljs-generator = cljNixBuilds.cljs-generator;
          dev-tools = cljNixBuilds.dev-tools;
        };
      });
}


