import css from "../../styles/main.css";
import pramuja from "../../public/images/brands/pramuja-white.png";

class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.navigationDrawer();
  }

  render() {
    this.innerHTML = `
                    <style>
                        ${css}

                    </style>
                    <nav>
                      <img src="${pramuja}" class="brand" alt="brand" />
                      <button class="navbar-toggler" id="navbar-toggler"><i class="fas fa-bars"></i></button>
                      <ul class="navbar-collapse" id="navbarResponsive">
                        <li>
                          <a href="#home">Home</a>
                        </li>
                        <li>
                        <a href="#">Favorite</a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/ari-pramuja/">About Us</a>
                        </li>
                      </ul>
                    </nav>`;
  }

  navigationDrawer() {
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarResponsive = document.getElementById("navbarResponsive");

    navbarToggler.addEventListener("click", () => {
      navbarResponsive.classList.toggle("show");
    });
  }
}

customElements.define("app-bar", appBar);
