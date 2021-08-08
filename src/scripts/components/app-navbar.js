import pramuja from "../../public/images/brands/pramuja-white.png";

class appNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="brand">
          <img src="${pramuja}" alt="brand" />
            <div>
              <button class="menu" type="button">
                <span class="fa fa-bars"></span>
              </button>
            </div>
        </div>

        <ul class="nav-list">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/ari-pramuja/" target="_blank">About</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("app-navbar", appNavbar);
