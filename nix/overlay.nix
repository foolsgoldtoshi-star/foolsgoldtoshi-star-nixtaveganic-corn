# Nix overlay for pinning exact versions and custom packages
final: prev: {
  # Pin Node.js to specific LTS version for reproducibility
  nodejs = prev.nodejs_20;
  
  # Ensure latest Babashka with all pods support
  babashka = prev.babashka.overrideAttrs (oldAttrs: {
    version = "1.3.185";
  });
  
  # Pin Clojure CLI version
  clojure = prev.clojure.overrideAttrs (oldAttrs: {
    version = "1.11.1.1435";
  });
  
  # Custom derivations for our project
  nixtaveganic-tools = prev.stdenv.mkDerivation {
    pname = "nixtaveganic-tools";
    version = "0.1.0";
    
    src = ../scripts;
    
    buildPhase = ''
      # Copy our Clojure scripts
      mkdir -p $out/bin
      cp *.clj $out/bin/
      chmod +x $out/bin/*.clj
    '';
    
    installPhase = ''
      # Create symlinks for easy access
      ln -s $out/bin/serve.clj $out/bin/nixta-serve
    '';
  };
  
  # Development shell utilities
  nixta-dev-tools = prev.writeShellScriptBin "nixta-dev" ''
    echo "🌽 NixtaVeganic Development Environment"
    echo "Node: $(${final.nodejs}/bin/node --version)"
    echo "Babashka: $(${final.babashka}/bin/bb --version)"
    echo "Clojure: $(${final.clojure}/bin/clojure -e '(clojure-version)')"
    echo ""
    echo "Available commands:"
    echo "  bb build:all    - Full build pipeline"
    echo "  bb serve        - Start development server"
    echo "  bb test         - Run spec validation"
    echo "  bb clean        - Clean build artifacts"
  '';
}
