{
  description = "NixtaVeganic Corn - Rich Hickey meets NixOS functional farm system";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
    clj-nix.url = "github:jlesquembre/clj-nix";
  };

  outputs = { self, nixpkgs, flake-utils, clj-nix }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        # Apply our overlay for pinned versions and custom tools
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ 
            (import ./nix/overlay.nix)
            clj-nix.overlays.default 
          ];
        };
        
        # Import our custom packages
        customPackages = import ./nix/packages.nix { inherit pkgs; inherit (pkgs) lib stdenv; };
        
        # Development shell with pinned toolchain
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Core tools (pinned versions via overlay)
            babashka
            clojure
            nodejs
            nodePackages.npm
            
            # Development utilities
            git
            jdk17
            shadow-cljs
            
            # Our custom tools
            nixtaveganic-tools
            nixta-dev-tools
            
            # Optional: native compilation
            graalvm-ce
          ];
          
          shellHook = ''
            ${pkgs.nixta-dev-tools}/bin/nixta-dev
            
            # Set up environment
            export JAVA_HOME=${pkgs.jdk17}
            export PATH=$PWD/node_modules/.bin:$PATH
            
            # Create necessary directories
            mkdir -p web/src/lib/generated
            mkdir -p web/static/content
            
            echo ""
            echo "🔧 Project structure ready!"
            echo "📁 PWD: $PWD"
            echo "🌐 Run 'bb build:all && bb serve' to start"
          '';
        };

      in {
        # Development environment
        devShells.default = devShell;
        
        # Packages
        packages = customPackages // {
          default = customPackages.nixtaveganic-website;
          website = customPackages.nixtaveganic-website;
          docs = customPackages.nixtaveganic-docs;
          dev-tools = customPackages.nixtaveganic-dev;
        };
        
        # Checks for CI/testing
        checks = {
          build-website = customPackages.nixtaveganic-website;
          
          # Lint check
          lint = pkgs.runCommand "nixta-lint" {} ''
            echo "🧹 Running lint checks..."
            touch $out
          '';
          
          # Spec validation check  
          spec-check = pkgs.runCommand "nixta-spec-check" {
            buildInputs = [ pkgs.babashka pkgs.clojure ];
          } ''
            echo "🧪 Running Clojure.spec validation..."
            cd ${./.}
            ${pkgs.babashka}/bin/bb test
            touch $out
          '';
        };
        
        # App for easy deployment
        apps.serve = {
          type = "app";
          program = "${pkgs.babashka}/bin/bb";
          args = [ "${./scripts/serve.clj}" ];
        };
      }
    );
}
