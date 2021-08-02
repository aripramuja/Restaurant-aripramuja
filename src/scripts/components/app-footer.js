import css from "../../styles/main.css";

class appFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    <style>
                        ${css}
                    </style>
                    <div class="app-footer">
                    <p>2021 © aripramuja@pramuja.tech. All rights reserved.</p>
                    </div>`;
  }
}

customElements.define("app-footer", appFooter);
