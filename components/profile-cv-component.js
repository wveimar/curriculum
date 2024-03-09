class ProfileCV extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="sobremi" id="">
        <div class="contenido-seccion">
            <h2 class="titulo-seccion">Sobre Mi</h2>
            <h3>Detalles Personales</h3>
            <p class="especial">Me dedico a dar lo mejor de mi para que se vea reflejado en un buen trabajo</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat placeat nobis quod distinctio,
                obcaecati labore alias suscipit vel eius! Natus voluptatibus, placeat illum ab error voluptas pariatur
                dolorum modi quisquam?</p>
            <div class="fila">
                <div class="col">
                    <i class="fa-solid fa-user"></i>
                    <span class="titulo-detalle">Perfil</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem recusandae culpa tempore
                        repellat quam saepe vitae, nostrum unde placeat impedit</p>
                </div>
                <div class="col">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="titulo-detalle">Ubicación</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem recusandae culpa tempore
                        repellat quam saepe vitae, nostrum unde placeat impedit</p>
                </div>
                <div class="col">
                    <i class="fa-solid fa-flag"></i>
                    <span class="titulo-detalle">Intereses</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem recusandae culpa tempore
                        repellat quam saepe vitae, nostrum unde placeat impedit</p>
                </div>
            </div>
        </div>
    </section>
        `;
  }
}

customElements.define("profile-cv", ProfileCV);
