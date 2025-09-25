# Custom package derivations for NixtaVeganic project
{ pkgs, lib, stdenv, ... }:

{
  # Main website package - builds the complete static site
  nixtaveganic-website = stdenv.mkDerivation rec {
    pname = "nixtaveganic-website";
    version = "0.3.0";
    
    src = lib.cleanSource ../.; # Clean source (excludes .git, etc.)
    
    buildInputs = with pkgs; [
      nodejs
      babashka
      clojure
      jdk17
      git
    ];
    
    buildPhase = ''
      export HOME=$TMPDIR
      export PATH=${pkgs.nodejs}/bin:${pkgs.babashka}/bin:$PATH
      
      # Create output directories
      mkdir -p web/dist
      
      # Run the full build pipeline
      echo "🌽 Building NixtaVeganic documentation..."
      bb build:all
    '';
    
    installPhase = ''
      mkdir -p $out
      cp -r web/dist/* $out/
      
      # Create metadata file
      cat > $out/build-info.json << EOF
      {
        "version": "${version}",
        "built_at": "$(date -Iseconds)",
        "nix_store_path": "$out",
        "source_hash": "${src}"
      }
      EOF
    '';
    
    meta = with lib; {
      description = "NixtaVeganic Corn - Ecological farm documentation system";
      homepage = "https://github.com/foolsgoldtoshi-star/foolsgoldtoshi-star-nixtaveganic-corn";
      license = licenses.mit;
      platforms = platforms.unix;
      maintainers = [ "foolsgoldtoshi-star" ];
    };
  };
  
  # Development tools package
  nixtaveganic-dev = stdenv.mkDerivation rec {
    pname = "nixtaveganic-dev";
    version = "0.3.0";
    
    src = ../scripts;
    
    buildInputs = with pkgs; [ babashka ];
    
    installPhase = ''
      mkdir -p $out/bin
      
      # Install all Clojure scripts as executable commands
      for script in *.clj; do
        if [ -f "$script" ]; then
          cp "$script" "$out/bin/"
          chmod +x "$out/bin/$script"
          
          # Create short aliases
          basename=$(basename "$script" .clj)
          cat > "$out/bin/nixta-$basename" << EOF
      #!/usr/bin/env bash
      exec ${pkgs.babashka}/bin/bb "$out/bin/$script" "\$@"
      EOF
          chmod +x "$out/bin/nixta-$basename"
        fi
      done
    '';
    
    meta = with lib; {
      description = "Development tools for NixtaVeganic project";
      license = licenses.mit;
      platforms = platforms.unix;
    };
  };
  
  # Documentation package (just the parsed content)
  nixtaveganic-docs = stdenv.mkDerivation rec {
    pname = "nixtaveganic-docs";
    version = "0.3.0";
    
    src = ../docs;
    
    buildInputs = with pkgs; [ babashka clojure ];
    
    buildPhase = ''
      export HOME=$TMPDIR
      
      # Parse documentation to structured data
      echo "📚 Processing farm documentation..."
      
      # This would run our ClojureScript parser
      # bb -m site.parser/parse-docs-to-edn
    '';
    
    installPhase = ''
      mkdir -p $out/docs
      cp -r . $out/docs/
      
      # Install processed data files
      mkdir -p $out/data
      # cp processed/*.edn $out/data/ # when parser is ready
    '';
    
    meta = with lib; {
      description = "Processed documentation for NixtaVeganic farm project";
      license = licenses.mit;
    };
  };
}
