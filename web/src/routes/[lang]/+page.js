// Load function for internationalized routes
export async function load({ params }) {
  const { lang } = params;
  
  // Validate language parameter
  const supportedLanguages = ['en', 'es'];
  const validLang = supportedLanguages.includes(lang) ? lang : 'en';
  
  return {
    lang: validLang,
    // Pass any additional data needed for the page
    meta: {
      title: `NixtaVeganic Corn (${validLang.toUpperCase()})`,
      description: validLang === 'en' 
        ? 'Ecological farm documentation system'
        : 'Sistema de documentación agrícola ecológica'
    }
  };
}

