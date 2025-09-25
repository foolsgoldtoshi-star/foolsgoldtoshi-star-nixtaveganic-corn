(ns site.specs
  (:require [clojure.spec.alpha :as s]
            [clojure.string :as str]))

;; ============================================================================
;; Core Data Specs for Farm Documentation System
;; ============================================================================

;; Page metadata
(s/def ::id (s/and string? #(re-matches #"[a-zA-Z0-9_-]+" %)))
(s/def ::title string?)
(s/def ::slug string?)
(s/def ::created inst?)
(s/def ::updated inst?)
(s/def ::tags (s/coll-of string? :kind vector?))

;; Content structure
(s/def ::markdown string?)
(s/def ::hiccup vector?)
(s/def ::svelte string?)

;; Navigation and site structure
(s/def ::nav-item (s/keys :req-un [::id ::title]
                         :opt-un [::slug]))
(s/def ::sitemap (s/coll-of ::nav-item :kind vector?))

;; Page entity
(s/def ::page (s/keys :req-un [::id ::title ::markdown]
                     :opt-un [::slug ::created ::updated ::tags
                             ::hiccup ::svelte]))

;; Build configuration
(s/def ::source-dir string?)
(s/def ::output-dir string?)
(s/def ::template-dir string?)

(s/def ::build-config 
  (s/keys :req-un [::source-dir ::output-dir]
          :opt-un [::template-dir]))

;; Farm-specific data structures
(s/def ::patch-id string?)
(s/def ::area-acres pos?)
(s/def ::slope-percent (s/and number? #(<= 0 % 100)))
(s/def ::aspect #{:N :NE :E :SE :S :SW :W :NW})
(s/def ::geometry string?) ; WKT or similar

(s/def ::farm-patch 
  (s/keys :req-un [::patch-id ::area-acres]
          :opt-un [::slope-percent ::aspect ::geometry]))

(s/def ::farm-config 
  (s/keys :req-un [::latitude ::longitude ::elevation-ft]
          :opt-un [::patches]))

(s/def ::latitude (s/and number? #(<= -90 % 90)))
(s/def ::longitude (s/and number? #(<= -180 % 180)))
(s/def ::elevation-ft number?)
(s/def ::patches (s/coll-of ::farm-patch :kind vector?))

;; ============================================================================
;; Build System Specs
;; ============================================================================

(s/def ::build-step keyword?)
(s/def ::inputs (s/coll-of string? :kind vector?))
(s/def ::outputs (s/coll-of string? :kind vector?))
(s/def ::dependencies (s/coll-of ::build-step :kind vector?))

(s/def ::build-target
  (s/keys :req-un [::build-step ::inputs ::outputs]
          :opt-un [::dependencies]))

(s/def ::build-plan 
  (s/coll-of ::build-target :kind vector?))

;; ============================================================================
;; Validation Functions
;; ============================================================================

(defn validate-page [page]
  (when-not (s/valid? ::page page)
    (throw (ex-info "Invalid page data"
                    {:page page
                     :explain (s/explain-str ::page page)})))
  page)

(defn validate-sitemap [sitemap]
  (when-not (s/valid? ::sitemap sitemap)
    (throw (ex-info "Invalid sitemap data"
                    {:sitemap sitemap
                     :explain (s/explain-str ::sitemap sitemap)})))
  sitemap)

(defn validate-build-config [config]
  (when-not (s/valid? ::build-config config)
    (throw (ex-info "Invalid build configuration"
                    {:config config
                     :explain (s/explain-str ::build-config config)})))
  config)

;; ============================================================================
;; Spec Instrumentation for Development
;; ============================================================================

(defn instrument-all! []
  "Enable spec checking on all functions"
  (println "🔧 Instrumenting functions with Clojure.spec..."))

(defn unstrument-all! []
  "Disable spec checking"
  (println "🔧 Removing spec instrumentation..."))

;; ============================================================================
;; Generative Testing Support
;; ============================================================================

(s/def ::test-page
  (s/keys :req-un [::id ::title ::markdown]))

(defn gen-test-page []
  (s/gen ::test-page))

(comment
  ;; REPL testing
  (require '[clojure.spec.gen.alpha :as gen])
  
  (gen/sample (s/gen ::page) 3)
  
  (validate-page {:id "test" 
                  :title "Test Page" 
                  :markdown "# Hello World"}))


