;; Test script to debug markdown parser
(require '[site.parser :as p])

(def test-markdown "```nix
{
  inputs.clj-nix.url = \"github:jlesquembre/clj-nix\";
  
  outputs = { self, nixpkgs, clj-nix }:
    let
      cljPkgs = clj-nix.packages.${system};
    in {
      packages.parser = cljPkgs.mkCljApp {
        name = \"nixtaveganic-parser\";
        src = ./site-dsl;
        main = \"site.core\";
      };
    };
}
```")

(println "Testing markdown parser...")
(println "Input markdown:")
(println test-markdown)
(println "\nParsed AST:")
(println (pr-str (p/md->ast test-markdown)))
