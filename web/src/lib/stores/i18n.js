// Internationalization store for multi-language support
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Language definitions
export const languages = {
  en: {
    code: 'en',
    name: 'English', 
    flag: '🇺🇸',
    rtl: false
  },
  es: {
    code: 'es', 
    name: 'Español',
    flag: '🇪🇸',
    rtl: false
  },
  // Future: Add more languages as needed
};

// Translations for UI elements
export const translations = {
  en: {
    nav: {
      home: 'Home',
      documentation: 'Documentation',
      overview: 'Overview',
      agronomy: 'Agronomy',
      climate: 'Climate',
      processing: 'Processing'
    },
    ui: {
      language: 'Language',
      theme: 'Theme',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      backToHome: 'Back to Home',
      sitemap: 'Sitemap',
      search: 'Search documentation...',
      noResults: 'No results found',
      loading: 'Loading...',
      notFound: 'Page not found',
      builtWith: 'Built with',
      by: 'by'
    },
    farm: {
      title: 'NixtaVeganic Corn',
      subtitle: 'Ecological, no-till, veganic field corn with on-site nixtamalization',
      description: 'A Git-first farm documentation system treating agriculture as an ecosystem and codebase: versioned, observable, and reversible.',
      elevation: 'Elevation',
      method: 'Method',
      water: 'Water', 
      processing: 'Processing',
      gettingStarted: 'Getting Started',
      quickStart: 'Quick Start',
      readOverview: 'Read the Overview',
      exploreAgronomy: 'Explore the Agronomy',
      checkWater: 'Check Water Planning'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      documentation: 'Documentación', 
      overview: 'Resumen',
      agronomy: 'Agronomía',
      climate: 'Clima',
      processing: 'Procesamiento'
    },
    ui: {
      language: 'Idioma',
      theme: 'Tema',
      lightMode: 'Modo Claro',
      darkMode: 'Modo Oscuro', 
      backToHome: 'Volver al Inicio',
      sitemap: 'Mapa del Sitio',
      search: 'Buscar documentación...',
      noResults: 'No se encontraron resultados',
      loading: 'Cargando...',
      notFound: 'Página no encontrada',
      builtWith: 'Construido con',
      by: 'por'
    },
    farm: {
      title: 'Maíz NixtaVegánico',
      subtitle: 'Maíz de campo ecológico, sin labranza, vegánico con nixtamalización in situ',
      description: 'Un sistema de documentación agrícola Git-first que trata la agricultura como ecosistema y código: versionado, observable y reversible.',
      elevation: 'Elevación',
      method: 'Método',
      water: 'Agua',
      processing: 'Procesamiento', 
      gettingStarted: 'Comenzando',
      quickStart: 'Inicio Rápido',
      readOverview: 'Leer el Resumen',
      exploreAgronomy: 'Explorar la Agronomía', 
      checkWater: 'Revisar Planificación del Agua'
    }
  }
};

// Create language store
function createLanguageStore() {
  const defaultLang = 'en';
  
  // Initialize from localStorage or URL path
  const getInitialLanguage = () => {
    if (!browser) return defaultLang;
    
    // Check URL path first (e.g., /es/docs)
    const pathLang = window.location.pathname.split('/')[1];
    if (languages[pathLang]) return pathLang;
    
    // Fallback to localStorage
    return localStorage.getItem('nixtaveganic-language') || defaultLang;
  };
  
  const { subscribe, set, update } = writable(getInitialLanguage());
  
  return {
    subscribe,
    set: (lang) => {
      if (languages[lang]) {
        set(lang);
        if (browser) {
          localStorage.setItem('nixtaveganic-language', lang);
          // Update URL path for internationalization
          const currentPath = window.location.pathname;
          const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}\//, '/');
          const newPath = `/${lang}${pathWithoutLang}`;
          window.history.replaceState({}, '', newPath);
        }
      }
    },
    getTranslation: (key) => {
      let current;
      subscribe(lang => current = lang)();
      
      const keys = key.split('.');
      let translation = translations[current];
      
      for (const k of keys) {
        translation = translation?.[k];
      }
      
      return translation || key; // Fallback to key if translation missing
    }
  };
}

export const currentLanguage = createLanguageStore();

// Helper function to get translations (shorthand)
export const t = (key) => {
  let translation;
  currentLanguage.subscribe(lang => {
    const keys = key.split('.');
    translation = translations[lang];
    for (const k of keys) {
      translation = translation?.[k];
    }
  })();
  return translation || key;
};
