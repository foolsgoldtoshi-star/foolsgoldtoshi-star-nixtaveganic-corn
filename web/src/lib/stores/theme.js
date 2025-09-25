// Theme store for warm dark/light theme toggle
// Inspired by f.lux, Solarized, and Daylight Computer
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Color palette inspired by f.lux warmth + solarized + daylight computer
export const themes = {
  light: {
    name: 'Light Sage',
    // Base colors - warm light theme
    bg: '#fefefe',          // Warm white
    bgSecondary: '#f8f9f7', // Subtle sage tint
    bgTertiary: '#f2f4f1',  // Light sage background
    
    // Text colors
    textPrimary: '#2c3e2d',    // Dark sage
    textSecondary: '#5a6c5b',  // Medium sage
    textMuted: '#8b9a8c',      // Light sage gray
    
    // Accent colors - jade-aquamarine spectrum  
    primary: '#4a7c59',        // Sage green
    primaryHover: '#3d6b4a',   // Darker sage
    secondary: '#6ba3a0',      // Light jade-aquamarine
    accent: '#f4a261',         // Warm amber (f.lux inspired)
    
    // Semantic colors
    success: '#52b788',
    warning: '#f4a261', 
    error: '#e63946',
    info: '#6ba3a0',
    
    // Borders and shadows
    border: '#e6ebe7',
    shadow: 'rgba(44, 62, 45, 0.1)',
    
    // Code and syntax
    codeBg: '#f8f9f7',
    codeText: '#2c3e2d',
    syntaxComment: '#8b9a8c',
    syntaxKeyword: '#4a7c59',
    syntaxString: '#6ba3a0',
    syntaxNumber: '#f4a261'
  },
  
  dark: {
    name: 'Dark Jade',
    // Base colors - warm dark theme
    bg: '#1a1d1b',           // Very dark sage
    bgSecondary: '#252b26',   // Dark sage background  
    bgTertiary: '#2f3530',   // Medium dark sage
    
    // Text colors - warm whites inspired by f.lux
    textPrimary: '#f4f0e8',    // Warm white
    textSecondary: '#e6ddd4',  // Warm light gray
    textMuted: '#b8aea5',      // Warm medium gray
    
    // Accent colors - jade-aquamarine + amber warmth
    primary: '#7fb069',        // Light sage green
    primaryHover: '#9bc53d',   // Brighter sage  
    secondary: '#5fb3b3',      // Jade-aquamarine
    accent: '#ffa94d',         // Warm orange (f.lux warmth)
    
    // Semantic colors (warmer in dark mode)
    success: '#7fb069',
    warning: '#ffa94d',
    error: '#ff6b6b', 
    info: '#5fb3b3',
    
    // Borders and shadows
    border: '#3a4f3c',
    shadow: 'rgba(0, 0, 0, 0.3)',
    
    // Code and syntax (daylight computer inspired)
    codeBg: '#252b26',
    codeText: '#f4f0e8', 
    syntaxComment: '#b8aea5',
    syntaxKeyword: '#7fb069',
    syntaxString: '#5fb3b3',
    syntaxNumber: '#ffa94d'
  }
};

// Create theme store with persistence
function createThemeStore() {
  const defaultTheme = 'light';
  
  // Initialize from localStorage in browser
  const initialTheme = browser ? 
    (localStorage.getItem('nixtaveganic-theme') || defaultTheme) :
    defaultTheme;
    
  const { subscribe, set, update } = writable(initialTheme);
  
  return {
    subscribe,
    set: (theme) => {
      set(theme);
      if (browser) {
        localStorage.setItem('nixtaveganic-theme', theme);
        // Apply theme to document root for CSS custom properties
        applyThemeToDocument(theme);
      }
    },
    toggle: () => update(current => {
      const newTheme = current === 'light' ? 'dark' : 'light';
      if (browser) {
        localStorage.setItem('nixtaveganic-theme', newTheme);
        applyThemeToDocument(newTheme);
      }
      return newTheme;
    }),
    getCurrentTheme: () => initialTheme
  };
}

// Apply theme CSS custom properties to document
function applyThemeToDocument(themeName) {
  if (!browser) return;
  
  const theme = themes[themeName];
  const root = document.documentElement;
  
  // Apply all theme colors as CSS custom properties
  Object.entries(theme).forEach(([key, value]) => {
    if (key !== 'name') {
      root.style.setProperty(`--color-${key}`, value);
    }
  });
  
  // Add theme class to body
  document.body.className = document.body.className
    .replace(/theme-\w+/, '') + ` theme-${themeName}`;
}

export const theme = createThemeStore();

// Initialize theme on store creation
if (browser) {
  applyThemeToDocument(theme.getCurrentTheme());
}
