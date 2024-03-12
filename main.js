const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const titulo = document.getElementById('titulo-info');
const parrafo = document.getElementById('parrafo-info');

// Toggle lista idiomas
idiomaActual.addEventListener('click',()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click',()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;
    debugger
    switch (idioma) {
        
        case 'usa':
            titulo.textContent = 'CapiDeveloper';
            parrafo.textContent = 'I have worked on comprehensive technology-based solutions for clinics and hospitals, integrating both management software and the work teams of each institution, achieving technological implementations that stand the test of time.Throughout my career, I have gained valuable experience in accounting and knowledge of administrative processes, thanks to my participation in various implementation projects. This experience has allowed me to understand the importance of financial and administrative management for the success of any project. Currently, I work as a front-end developer, mainly with React and Angular, actively participating in the software development cycle.    At the moment, I work as a Front-end Developer with a focus on React, AWS, Angular JS, NestJS, and NextJS.'
            break;
        case 'latino':
            titulo.textContent = 'CapiDeveloper';
            parrafo.textContent = 'He trabajado en soluciones integrales de base tecnológica para clínicas y hospitales integrando tanto el software de manejo como el equipo de trabajo de cada institución, logrando implementaciones tecnológicas que permanecen en el tiempo.A lo largo de mi carrera, he acumulado una valiosa experiencia en contabilidad y conocimientos de procesos administrativos, gracias a mi participación en diversos proyectos de implementación. Esta experiencia me ha permitido comprender la importancia de la gestión financiera y administrativa para el éxito de cualquier proyecto.Actualmente me desempeño como frontend principalmente con React y angular participando activamente en el ciclo de desarrollo de software.'
            break;
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    switch (navigator.language) {
        case 'en-US':
            establecerIdioma('usa')
            break;
        
        default:
            break;
    }
});