class HeadCV extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="inicio" id="inicio">
        <div class="contenido-seccion">
            <header>
                <div class="nav-bar">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <nav id="nav" class="nav">
                    <a href="#inicio">Inicio</a>
                    <a href="#sobremi">Sobre mí</a>
                    <a href="#habilidades">Habilidades</a>
                    <a href="#resumen">Resumen</a>
                    <a href="#contacto">Contacto</a>
                </nav>
                <div class="logo">
                    W<span class="color">M</span>
                </div>
            </header>
            <div class="info">
                <h1>WVEIMAR MAMIAN</h1>
                <h2>Desarrollador front-end</h2>
                <div class="redes">
                    <a href="#github"><i class="fa-brands fa-github"></i>Git-Hub</a>
                    <a href="#linkedin"><i class="fa-brands fa-linkedin"></i>linkedin</a>
                </div>
            </div>
            <div class="foto">
                <img src="img/foto.png" alt="">
            </div>
        </div>
        </section>
        `;
  }
}

customElements.define("head-cv", HeadCV);
