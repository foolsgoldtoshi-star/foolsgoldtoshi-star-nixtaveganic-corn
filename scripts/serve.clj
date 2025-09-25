#!/usr/bin/env bb
(ns serve
  (:require [org.httpkit.server :as http]
            [clojure.java.io :as io]
            [clojure.string :as str]))

;; ============================================================================
;; Static File Server for Babashka
;; ============================================================================

(def ^:private mime-types
  {"html" "text/html"
   "css"  "text/css"
   "js"   "application/javascript"
   "json" "application/json"
   "png"  "image/png"
   "jpg"  "image/jpeg"
   "jpeg" "image/jpeg"
   "gif"  "image/gif"
   "svg"  "image/svg+xml"
   "ico"  "image/x-icon"
   "woff" "font/woff"
   "woff2" "font/woff2"
   "ttf"  "font/ttf"
   "eot"  "application/vnd.ms-fontobject"})

(defn get-mime-type [file-path]
  (let [ext (-> file-path (str/split #"\.") last str/lower-case)]
    (get mime-types ext "text/plain")))

(defn serve-static-file [root-dir request-path]
  (let [safe-path (str/replace request-path #"\.\." "")  ; Basic security
        full-path (if (= "/" safe-path) 
                    (str root-dir "/index.html")
                    (str root-dir safe-path))
        file (io/file full-path)]
    
    (if (.exists file)
      {:status 200
       :headers {"Content-Type" (get-mime-type full-path)
                "Cache-Control" "public, max-age=3600"}
       :body (io/input-stream file)}
      {:status 404
       :headers {"Content-Type" "text/html"}
       :body (str "<html><body>"
                 "<h1>🌽 Page Not Found</h1>"
                 "<p>The requested path <code>" safe-path "</code> was not found.</p>"
                 "<p><a href=\"/\">← Back to Home</a></p>"
                 "</body></html>")})))

(defn spa-handler [root-dir]
  "Handler for Single Page Application routing"
  (fn [request]
    (let [uri (:uri request)]
      (cond
        ;; Static assets (has file extension)
        (re-find #"\.[a-zA-Z0-9]+$" uri)
        (serve-static-file root-dir uri)
        
        ;; API routes (if any)
        (str/starts-with? uri "/api/")
        {:status 404 :body "API not implemented"}
        
        ;; All other routes → serve index.html (SPA routing)
        :else
        (serve-static-file root-dir "/index.html")))))

;; ============================================================================
;; Server Configuration
;; ============================================================================

(def config
  {:port (Integer/parseInt (or (System/getenv "PORT") "8080"))
   :root-dir (or (System/getenv "SITE_ROOT") "web/dist")})

(defn start-server 
  ([] (start-server config))
  ([{:keys [port root-dir]}]
   (let [handler (spa-handler root-dir)]
     (println "🌽 NixtaVeganic Server Starting...")
     (println "📁 Serving files from:" (.getAbsolutePath (io/file root-dir)))
     (println "🌐 Local server: http://localhost:" port)
     (println "⏹️  Press Ctrl+C to stop")
     (println)
     
     (http/run-server handler {:port port})
     
     ;; Keep server running
     @(promise))))

(defn -main [& args]
  (start-server))

;; For bb task execution
(defn serve! []
  (start-server))

;; REPL helpers
(comment
  ;; Start server in development
  (start-server {:port 3000 :root-dir "web/dist"})
  
  ;; Check if files exist
  (.exists (io/file "web/dist/index.html")))
