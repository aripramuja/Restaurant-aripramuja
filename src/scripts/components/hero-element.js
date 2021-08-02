import css from "../../styles/main.css";

class heroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    <style>
                        ${css}
                    </style>
                    <div class="hero">
                      <div class="hero-text">
                          <p>Welcome to</p>
                          <h1>Pramuja Restaurant</h1>
                          <p>Explore the best restaurants in various parts of Indonesia</p>
                          <a href="#restaurant-content">Explore</a>
                      </div>
                    </div>`;
  }
}

customElements.define("hero-element", heroElement);
