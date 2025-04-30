// Constantes y configuraciones
const CONFIG = {
  defaultLanguage: 'es',
  supportedLanguages: {
    'en-US': 'usa',
    'es': 'latino'
  }
};

// Elementos del DOM
const elements = {
  currentLanguage: document.getElementById('idioma'),
  languageList: document.getElementById('idiomas'),
  languageOptions: document.getElementsByClassName('opcion'),
  textsToChange: document.querySelectorAll('[data-section]')
};

// Funciones de utilidad
const fetchLanguageFile = async (language) => {
  try {
    const response = await fetch(`./languages/${language}.json`);
    return await response.json();
  } catch (error) {
    console.error('Error loading language file:', error);
    return null;
  }
};

const updateTexts = (texts) => {
  elements.textsToChange.forEach(textToChange => {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.textContent = texts[section][value];
  });
};

// Event Listeners
elements.currentLanguage.addEventListener('click', () => {
  elements.languageList.classList.toggle('toggle');
});

Array.from(elements.languageOptions).forEach(option => {
  option.addEventListener('click', () => {
    const language = option.getElementsByTagName('span')[0].textContent.toLowerCase();
    setLanguage(language);
  });
});

// Funciones principales
const setLanguage = async (language) => {
  const flagPath = `banderas/${language}.svg`;
  elements.currentLanguage.getElementsByTagName('img')[0].src = flagPath;
  
  const languageCode = language === 'usa' ? 'en' : 'es';
  const texts = await fetchLanguageFile(languageCode);
  
  if (texts) {
    updateTexts(texts);
  }
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  const userLanguage = navigator.language;
  const defaultLanguage = CONFIG.supportedLanguages[userLanguage] || CONFIG.defaultLanguage;
  setLanguage(defaultLanguage);
});