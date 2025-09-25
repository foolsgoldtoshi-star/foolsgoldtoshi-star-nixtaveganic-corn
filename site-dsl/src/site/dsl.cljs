(ns site.dsl
  "ClojureScript DSL for generating farm documentation components")

;; ============================================================================
;; Core DSL Elements
;; ============================================================================

(defn h1 [s] [:h1 s])
(defn h2 [s] [:h2 s])
(defn h3 [s] [:h3 s])
(defn p [s] [:p s])
(defn ul [& items] (into [:ul] items))
(defn ol [& items] (into [:ol] items))
(defn li [x] [:li x])
(defn code [lang s] [:code {:class (str "language-" lang)} s])
(defn pre [& content] (into [:pre] content))
(defn blockquote [& content] (into [:blockquote] content))
(defn strong [s] [:strong s])
(defn em [s] [:em s])
(defn link [href text] [:a {:href href} text])

;; ============================================================================
;; Farm-Specific DSL Elements
;; ============================================================================

(defn farm-metric [label value unit]
  [:div {:class "farm-metric"}
   [:span {:class "metric-label"} label]
   [:span {:class "metric-value"} value]
   [:span {:class "metric-unit"} unit]])

(defn patch-info [patch-data]
  [:div {:class "patch-info"}
   [:h4 (str "Patch " (:id patch-data))]
   [:ul
    [:li (str "Area: " (:area-ac patch-data) " acres")]
    [:li (str "Slope: " (:slope-pct patch-data) "%")]
    [:li (str "Aspect: " (name (:aspect patch-data)))]]])

(defn water-source [source-data]
  [:div {:class "water-source"}
   [:h4 (:name source-data)]
   [:p (str "Flow: " (:baseline-gpm source-data) " gpm (wet season)")]
   [:p (str "Dry season: " (:dry-season-gpm source-data) " gpm")]])

(defn crop-rotation [rotation-data]
  [:div {:class "crop-rotation"}
   [:h4 "No-Till Rotation Sequence"]
   [:ol
    [:li (str "Cover Crop: " 
              (name (get-in rotation-data [:year-0-cover :cereal]))
              " + "
              (name (get-in rotation-data [:year-0-cover :legume])))]
    [:li (str "Termination: " 
              (name (:termination rotation-data))
              " at "
              (name (:terminate-stage rotation-data)))]
    [:li (str "Cash Crop: " 
              (name (:cash-crop rotation-data))
              " via "
              (name (:seeding rotation-data)))]]])

;; ============================================================================
;; Page Structure DSL
;; ============================================================================

(defn page 
  "Create a page with metadata and content"
  [{:keys [id title slug] :as meta} & body]
  (merge meta {:body (vec body)}))

(defn section
  "Create a content section with heading"
  [title & content]
  [:section {:class "content-section"}
   [:h2 title]
   (into [:div {:class "section-content"}] content)])

;; ============================================================================
;; Specialized Farm Components
;; ============================================================================

(defn calendar-entry [month tasks]
  [:div {:class "calendar-month"}
   [:h4 month]
   [:ul
    (for [task tasks]
      [:li task])]])

(defn sop-step [step-num description notes]
  [:div {:class "sop-step"}
   [:div {:class "step-number"} step-num]
   [:div {:class "step-content"}
    [:p description]
    (when notes [:small notes])]])

(defn data-table [headers rows]
  [:table {:class "data-table"}
   [:thead
    [:tr
     (for [header headers]
       [:th header])]]
   [:tbody
    (for [row rows]
      [:tr
       (for [cell row]
         [:td cell])])]])

;; ============================================================================
;; Meta Information
;; ============================================================================

(def version "0.3.0")
(def description "ClojureScript DSL for NixtaVeganic farm documentation")

