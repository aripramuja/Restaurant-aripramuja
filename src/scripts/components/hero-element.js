class heroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-text">
      <p>Welcome to</p>
      <h1>Pramuja Restaurant</h1>
      <p>Explore the best restaurants in various parts of Indonesia</p>
      <a href="#main-content">Explore</a>
    </div>
    `;
  }
}

customElements.define("hero-element", heroElement);
