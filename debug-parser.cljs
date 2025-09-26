;; Debug script for markdown parser
(require '[clojure.string :as str])

(defn debug-md->ast 
  "Debug version of markdown parser"
  [markdown-str]
  (let [lines (str/split-lines markdown-str)
        blocks (loop [remaining lines
                      current-block []
                      result []]
                 (if (empty? remaining)
                   (if (seq current-block)
                     (conj result (str/join "\n" current-block))
                     result)
                   (let [line (first remaining)
                         rest-lines (rest remaining)]
                     (println "Processing line:" (pr-str line))
                     (cond
                       ;; Empty line - end current block
                       (str/blank? line)
                       (do
                         (println "  -> Empty line, ending block")
                         (recur rest-lines [] (if (seq current-block)
                                               (conj result (str/join "\n" current-block))
                                               result)))
                       
                       ;; Start of fenced code block
                       (str/starts-with? line "```")
                       (let [lang (subs line 3)
                             code-lines (take-while #(not (str/starts-with? % "```")) rest-lines)
                             remaining-after-code (drop (inc (count code-lines)) rest-lines)
                             code-content (str/join "\n" code-lines)]
                         (println "  -> Found fenced code block, lang:" lang)
                         (println "  -> Code lines:" (count code-lines))
                         (println "  -> Remaining lines:" (count remaining-after-code))
                         (recur remaining-after-code [] (conj result [:code-block {:lang lang} code-content])))
                       
                       ;; Regular line - add to current block
                       :else
                       (do
                         (println "  -> Regular line, adding to block")
                         (recur rest-lines (conj current-block line) result)))))]
    
    (println "Final blocks:")
    (doseq [block blocks]
      (println "Block:" (pr-str block)))
    
    blocks))

;; Test with a simple example
(def test-markdown "```nix
{
  inputs.clj-nix.url = \"github:jlesquembre/clj-nix\";
}
```")

(println "Testing with simple example:")
(debug-md->ast test-markdown)
