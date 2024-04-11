const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');




// Toggle lista idiomas
idiomaActual.addEventListener('click',()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);
const textsToChange = document.querySelectorAll('[data-section]');


opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click',()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;
    switch (idioma) {
        
        case 'usa':
                changeLanguage('en');
                console.log('en');
            break;
        case 'latino':
            changeLanguage('es');
            console.log('es');
            break;
        default:
            break;
    }
}

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
  
    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;
      textToChange.textContent = texts[section][value];
    }
  };



document.addEventListener('DOMContentLoaded',()=>{
    switch (navigator.language) {
        case 'en-US':
            establecerIdioma('usa')
            break;
        
        default:
            establecerIdioma('latino')
            break;
    }
});