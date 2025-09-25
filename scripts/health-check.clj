#!/usr/bin/env bb
(ns health-check
  "Health check script for NixtaVeganic functional farm system
   Enhanced with clj-nix integration monitoring"
  (:require [babashka.fs :as fs]
            [clojure.java.shell :refer [sh]]
            [clojure.string :as str]))

;; ============================================================================
;; System Health Checks
;; ============================================================================

(defn check-build-outputs []
  "Check if all expected build outputs exist"
  (let [expected-files ["web/dist/index.html"
                        "web/static/sitemap.json"
                        "web/src/lib/generated/sitemap.js"]
        missing-files (remove fs/exists? expected-files)]
    (if (empty? missing-files)
      {:status :ok :message "All build outputs present"}
      {:status :error :message (str "Missing files: " missing-files)})))

(defn check-documentation []
  "Check documentation completeness"
  (let [required-docs ["docs/00_overview.md"
                       "docs/11_nix_babashka_integration.md"
                       "docs/12_complete_integration_guide.md"]
        missing-docs (remove fs/exists? required-docs)
        total-docs (count (fs/glob "docs" "*.md"))]
    {:status (if (empty? missing-docs) :ok :warn)
     :message (str total-docs " documentation files, " 
                  (count missing-docs) " missing core docs")
     :details {:total total-docs :missing missing-docs}}))

(defn check-clj-nix-integration []
  "Check clj-nix integration readiness"
  (let [clj-nix-files ["flake.nix" "build.nix"]
        present-files (filter fs/exists? clj-nix-files)]
    {:status (if (= (count present-files) (count clj-nix-files)) :ok :warn)
     :message (str "clj-nix integration: " (count present-files) "/" (count clj-nix-files) " files")
     :clj-nix-ready (= (count present-files) (count clj-nix-files))}))

(defn check-babashka-tasks []
  "Check Babashka task system"
  (try
    (let [bb-edn (fs/exists? "bb.edn")
          task-count (if bb-edn
                       (-> (slurp "bb.edn")
                           read-string
                           :tasks
                           count)
                       0)]
      {:status :ok
       :message (str "Babashka tasks: " task-count " defined")
       :bb-edn-present bb-edn})
    (catch Exception e
      {:status :error 
       :message (str "Babashka check failed: " (.getMessage e))})))

;; ============================================================================
;; Main Health Check Runner
;; ============================================================================

(defn run-health-checks []
  "Run comprehensive system health checks"
  (println "🎊 NixtaVeganic Functional Farm System Health Check")
  (println "🖤🤎💙 Checking clj-nix + Babashka + ClojureScript integration...")
  (println)
  
  (let [checks [[:build-outputs (check-build-outputs)]
                [:documentation (check-documentation)]
                [:clj-nix-integration (check-clj-nix-integration)]
                [:babashka-tasks (check-babashka-tasks)]]
        
        results (map (fn [[name result]]
                      (let [status-emoji (case (:status result)
                                          :ok "✅"
                                          :warn "⚠️" 
                                          :error "❌")]
                        (println (str status-emoji " " (str/upper-case (str name)) ": " (:message result)))
                        [name result]))
                    checks)
        
        all-ok? (every? #(= :ok (:status (second %))) results)]
    
    (println)
    (if all-ok?
      (do (println "🎊 System Status: HEALTHY")
          (println "🌐 Ready for deployment: GitHub Pages + local development")
          (println "🖤 clj-nix integration: Enhanced Nix + Clojure workflow")
          0)
      (do (println "⚠️ System Status: NEEDS ATTENTION")
          (println "🔧 Run 'bb build:all' to resolve build issues")
          1))))

;; ============================================================================
;; CLI Entry Point
;; ============================================================================

(defn -main [& args]
  (System/exit (run-health-checks)))

;; Auto-run when executed as script
(when (= *file* (System/getProperty "babashka.file"))
  (-main))

;; Export for bb task execution
(when (resolve 'user/health-check)
  (intern 'user 'health-check run-health-checks))
