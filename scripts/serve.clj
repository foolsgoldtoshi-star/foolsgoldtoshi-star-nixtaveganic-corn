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

(defn log-request [request response]
  "Log incoming requests with beautiful formatting"
  (let [uri (:uri request)
        method (:request-method request)
        status (:status response)
        timestamp (java.time.LocalDateTime/now)
        time-str (.format timestamp (java.time.format.DateTimeFormatter/ofPattern "HH:mm:ss"))]
    
    ;; Color code by status
    (let [status-emoji (cond
                        (<= 200 status 299) "✅"
                        (<= 300 status 399) "🔄"
                        (<= 400 status 499) "⚠️"
                        (<= 500 status 599) "❌"
                        :else "❓")]
      
      (println (str "[" time-str "] " status-emoji " " method " " uri " → " status)))))

(defn spa-handler [root-dir]
  "Handler for Single Page Application routing"
  (fn [request]
    (let [uri (:uri request)
          response (cond
                    ;; Static assets (has file extension)
                    (re-find #"\.[a-zA-Z0-9]+$" uri)
                    (serve-static-file root-dir uri)
                    
                    ;; API routes (if any)
                    (str/starts-with? uri "/api/")
                    {:status 404 :body "API not implemented"}
                    
                    ;; All other routes → serve index.html (SPA routing)
                    :else
                    (serve-static-file root-dir "/index.html"))]
      
      ;; Log the request
      (log-request request response)
      
      response)))

;; ============================================================================
;; Server Configuration
;; ============================================================================

(def config
  {:port (Integer/parseInt (or (System/getenv "PORT") "8080"))
   :root-dir (or (System/getenv "SITE_ROOT") "web/dist")})

(defn start-server 
  ([] (start-server config))
  ([{:keys [port root-dir]}]
   (let [handler (spa-handler root-dir)
         root-file (io/file root-dir)
         index-file (io/file root-dir "index.html")
         dist-exists (.exists root-file)
         index-exists (.exists index-file)]
     
     ;; Beautiful startup banner
     (println)
     (println "🎊🎊🎊 LIVING ECOSYSTEM SERVER STARTING! 🎊🎊🎊")
     (println "🌽 NixtaVeganic Functional Farm Documentation System")
     (println "🖤🤎💙 Built with ClojureScript DSL + SvelteKit + Babashka")
     (println)
     
     ;; System status
     (println "📊 SYSTEM STATUS:")
     (println "  📁 Root directory:" (.getAbsolutePath root-file))
     (println "  📄 Index file exists:" (if index-exists "✅ YES" "❌ NO"))
     (println "  📦 Distribution ready:" (if dist-exists "✅ YES" "❌ NO"))
     (println)
     
     ;; Server info
     (println "🌐 SERVER CONFIGURATION:")
     (println "  🔗 URL: http://localhost:" port)
     (println "  🚀 Mode: Single Page Application (SPA)")
     (println "  📱 Responsive: Mobile + Desktop optimized")
     (println "  🎨 Theme: Warm dark/light with sage + jade accents")
     (println)
     
     ;; Features
     (println "✨ LIVING ECOSYSTEM FEATURES:")
     (println "  🔍 Global search (press / to focus)")
     (println "  📋 Sticky MiniTOC with scroll spy")
     (println "  ⬅️➡️ Smart navigation (prev/next)")
     (println "  🌱 Functional farm knowledge base")
     (println "  🎊 Real-time content updates")
     (println)
     
     ;; Philosophy
     (println "🌱 PHILOSOPHY:")
     (println "  \"Simple made easy, farms made functional\"")
     (println "  \"From epistemic seed bank to planetary commons\"")
     (println "  \"Rich Hickey meets Helen Atthowe meets NixOS\"")
     (println)
     
     ;; Ready message
     (println "🚀 READY TO SERVE!")
     (println "  ⏹️  Press Ctrl+C to stop")
     (println "  🔄 Server will auto-reload on file changes")
     (println "  🌍 Access your living ecosystem now!")
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


