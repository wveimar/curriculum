// Constantes y configuraciones
const CONFIG = {
  defaultLanguage: 'latino',
  supportedLanguages: {
    'es': 'latino',
    'en': 'usa'
  }
};

// Elementos del DOM
const elements = {
  currentLanguage: document.getElementById('idioma'),
  languageList: document.getElementById('idiomas'),
  languageOptions: document.getElementsByClassName('opcion'),
  textsToChange: []
};

// Funciones de utilidad
const fetchLanguageFile = async (languageCode) => {
  try {
    const response = await fetch(`./languages/${languageCode}.json`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error loading language file:', error);
    return null;
  }
};

const updateTexts = (texts) => {
  // Volver a consultar los elementos para incluir nuevos elementos dinámicos o recién renderizados
  elements.textsToChange = document.querySelectorAll('[data-section]');
  elements.textsToChange.forEach(textToChange => {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    if (texts[section] && texts[section][value] !== undefined) {
      textToChange.textContent = texts[section][value];
    }
  });
};

// Event Listeners
elements.currentLanguage.addEventListener('click', (e) => {
  e.preventDefault();
  elements.languageList.classList.toggle('toggle');
});

// Cerrar selector al hacer clic afuera
document.addEventListener('click', (e) => {
  if (!elements.currentLanguage.contains(e.target) && !elements.languageList.contains(e.target)) {
    elements.languageList.classList.remove('toggle');
  }
});

Array.from(elements.languageOptions).forEach(option => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    const language = option.querySelector('span').textContent.trim().toLowerCase();
    setLanguage(language);
    elements.languageList.classList.remove('toggle');
  });
});

// Funciones principales
const setLanguage = async (language) => {
  const flagPath = `./img/banderas/${language}.svg`;
  const imgElement = elements.currentLanguage.querySelector('img');
  if (imgElement) {
    imgElement.src = flagPath;
  }
  
  const languageCode = language === 'usa' ? 'en' : 'es';
  const texts = await fetchLanguageFile(languageCode);
  
  if (texts) {
    updateTexts(texts);
    localStorage.setItem('preferred-language', language);
  }
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  const storedLanguage = localStorage.getItem('preferred-language');
  if (storedLanguage) {
    setLanguage(storedLanguage);
  } else {
    const systemLang = navigator.language || navigator.userLanguage;
    const isEnglish = systemLang.startsWith('en');
    const detectedLanguage = isEnglish ? 'usa' : 'latino';
    setLanguage(detectedLanguage);
  }
});