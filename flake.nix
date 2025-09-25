{
  description = "Star NixtaVeganic reproducible build";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
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

        packages.website = pkgs.stdenv.mkDerivation {
          pname = "star-nixta-website";
          version = "0.3";
          src = ./.;
          buildInputs = [
            pkgs.nodejs_20 pkgs.babashka pkgs.clojure pkgs.jdk17 pkgs.clj-kondo
          ];
          buildPhase = ''
            bb build:all
          '';
          installPhase = ''
            mkdir -p $out
            cp -r web/build/* $out/
          '';
        };
      });
}
