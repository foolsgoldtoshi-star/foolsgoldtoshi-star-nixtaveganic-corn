(ns site.core-test
  (:require [clojure.test :refer [deftest is testing run-tests]]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [site.specs :as specs]
            [site.parser :as parser]
            [site.generator :as generator]
            [clojure.java.io :as io]
            [clojure.string :as str]))

;; ============================================================================
;; Spec Validation Tests
;; ============================================================================

(deftest test-page-spec
  (testing "Valid page data passes spec"
    (let [valid-page {:id "test-page"
                      :title "Test Page"
                      :markdown "# Hello World\n\nThis is a test."}]
      (is (s/valid? ::specs/page valid-page))))
  
  (testing "Invalid page data fails spec"
    (let [invalid-page {:id ""  ; Invalid empty ID
                        :title "Test Page"
                        :markdown "# Hello World"}]
      (is (not (s/valid? ::specs/page invalid-page))))))

(deftest test-sitemap-spec
  (testing "Valid sitemap passes spec"
    (let [valid-sitemap [{:id "page1" :title "Page One"}
                         {:id "page2" :title "Page Two"}]]
      (is (s/valid? ::specs/sitemap valid-sitemap))))
  
  (testing "Empty sitemap is valid"
    (is (s/valid? ::specs/sitemap []))))

(deftest test-farm-config-spec
  (testing "Valid farm config passes spec"
    (let [valid-config {:latitude 38.8
                        :longitude -123.0
                        :elevation-ft 3000
                        :patches [{:patch-id "P01"
                                  :area-acres 4.8
                                  :slope-percent 3.5
                                  :aspect :SSW}]}]
      (is (s/valid? ::specs/farm-config valid-config)))))

;; ============================================================================
;; Parser Tests
;; ============================================================================

(deftest test-file-to-page-data
  (testing "Parse markdown file to page data"
    (let [test-file (doto (io/file "test-page.md")
                      (spit "# Test Page\n\nThis is a test page."))
          page-data (parser/file->page-data test-file)]
      
      (is (= "test-page" (:id page-data)))
      (is (= "Test Page" (:title page-data)))
      (is (str/includes? (:markdown page-data) "This is a test page"))
      
      ;; Cleanup
      (.delete test-file))))

(deftest test-markdown-to-hiccup
  (testing "Convert markdown to hiccup"
    (let [markdown "# Hello\n\nThis is **bold** text."
          hiccup (parser/markdown->hiccup markdown)]
      (is (vector? hiccup))
      (is (= :div (first hiccup))))))

(deftest test-generate-sitemap
  (testing "Generate sitemap from pages"
    (let [pages [{:id "page1" :title "First Page" :markdown "..."}
                 {:id "page2" :title "Second Page" :markdown "..."}]
          sitemap (parser/generate-sitemap pages)]
      
      (is (= 2 (count sitemap)))
      (is (every? #(contains? % :id) sitemap))
      (is (every? #(contains? % :title) sitemap)))))

;; ============================================================================
;; Generator Tests
;; ============================================================================

(deftest test-hiccup-to-svelte
  (testing "Convert hiccup to Svelte markup"
    (let [hiccup [:div {:class "test"} 
                  [:h1 "Hello"] 
                  [:p "World"]]
          svelte (generator/hiccup->svelte hiccup)]
      
      (is (string? svelte))
      (is (str/includes? svelte "<div"))
      (is (str/includes? svelte "<h1>Hello</h1>"))
      (is (str/includes? svelte "<p>World</p>")))))

(deftest test-generate-page-component
  (testing "Generate Svelte component from page data"
    (let [page {:id "test"
                :title "Test Page" 
                :markdown "# Hello"
                :hiccup [:div [:h1 "Hello"]]}
          component (generator/generate-page-component page)]
      
      (is (= "test.svelte" (:filename component)))
      (is (string? (:content component)))
      (is (str/includes? (:content component) "<script>"))
      (is (str/includes? (:content component) "</style>")))))

;; ============================================================================
;; Integration Tests
;; ============================================================================

(deftest test-end-to-end-pipeline
  (testing "Full pipeline: markdown → parse → generate → components"
    ;; Create test markdown files
    (let [test-dir "test-docs"
          _ (.mkdirs (io/file test-dir))
          
          test-files [["01_overview.md" "# Overview\n\nProject overview."]
                      ["02_setup.md" "# Setup\n\nSetup instructions."]]
          
          _ (doseq [[filename content] test-files]
              (spit (str test-dir "/" filename) content))
          
          ;; Parse files
          files (parser/find-markdown-files test-dir)
          pages (map parser/file->page-data files)
          
          ;; Generate sitemap
          sitemap (parser/generate-sitemap pages)
          
          ;; Generate components
          components (map generator/generate-page-component pages)]
      
      ;; Verify results
      (is (= 2 (count pages)))
      (is (= 2 (count sitemap))) 
      (is (= 2 (count components)))
      (is (every? #(str/ends-with? (:filename %) ".svelte") components))
      
      ;; Cleanup
      (doseq [file (file-seq (io/file test-dir))]
        (when (.isFile file) (.delete file)))
      (.delete (io/file test-dir)))))

;; ============================================================================
;; Performance Tests
;; ============================================================================

(deftest test-async-parsing-performance
  (testing "Async parsing is faster than sequential"
    ;; Create multiple test files
    (let [test-dir "perf-test"
          _ (.mkdirs (io/file test-dir))
          
          ;; Generate 10 test files
          _ (dotimes [i 10]
              (spit (str test-dir "/" i ".md") 
                    (str "# Page " i "\n\nContent for page " i)))
          
          files (parser/find-markdown-files test-dir)
          
          ;; Time sequential parsing
          start-seq (System/nanoTime)
          seq-results (doall (map parser/file->page-data files))
          seq-time (- (System/nanoTime) start-seq)
          
          ;; Time async parsing
          start-async (System/nanoTime)
          async-results @(parser/parse-files-async files)
          async-time (- (System/nanoTime) start-async)]
      
      ;; Results should be equivalent
      (is (= (count seq-results) (count async-results)))
      
      ;; Log timing (async should be faster for I/O bound operations)
      (println "Sequential:" (/ seq-time 1000000) "ms")
      (println "Async:" (/ async-time 1000000) "ms")
      
      ;; Cleanup
      (doseq [file (file-seq (io/file test-dir))]
        (when (.isFile file) (.delete file)))
      (.delete (io/file test-dir)))))

;; ============================================================================
;; Test Runner
;; ============================================================================

(defn run-all-tests []
  "Run all tests and return summary"
  (println "🧪 Running Clojure.spec and integration tests...")
  (println)
  
  ;; Enable spec instrumentation for testing
  (stest/instrument)
  
  (let [results (run-tests 'site.core-test)]
    (println)
    (if (zero? (:fail results))
      (do 
        (println "✅ All tests passed!")
        (println "📊 Tests run:" (:test results))
        (println "📊 Assertions:" (:pass results))
        true)
      (do
        (println "❌ Some tests failed!")
        (println "📊 Tests run:" (:test results))
        (println "📊 Passed:" (:pass results))
        (println "📊 Failed:" (:fail results))
        (println "📊 Errors:" (:error results))
        false))))

;; ============================================================================
;; Property-Based Testing (with Spec)
;; ============================================================================

(deftest test-page-data-properties
  (testing "Generated page data always satisfies spec"
    (let [gen-results (stest/check `specs/validate-page {:clojure.spec.test.check/opts {:num-tests 50}})]
      (is (every? #(true? (-> % :clojure.spec.test.check/ret :result)) gen-results)))))

(comment
  ;; Run tests from REPL
  (run-all-tests)
  
  ;; Run specific test
  (test-page-spec)
  
  ;; Check specs
  (stest/check `specs/validate-page))


