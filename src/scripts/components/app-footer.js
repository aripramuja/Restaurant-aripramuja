class appFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-footer">
      <p>2021 © aripramuja@pramuja.tech. All rights reserved.</p>
    </div>
    `;
  }
}

customElements.define("app-footer", appFooter);
