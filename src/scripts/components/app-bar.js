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
                      <div class="navbar-brand">
                        <a href=""><img src="${pramuja}" alt="brand" /></a>
                      </div>
                      <button class="navbar-toggler" id="navbar-toggler"><i class="fas fa-bars"></i><small>MENU</small></button>
                      <ul class="navbar-collapse" id="navbarResponsive">
                        <li>
                          <a href="#home"><i class="fas fa-home"></i>Home</a>
                        </li>
                        <li>
                        <a href="#"><i class="fas fa-registered"></i>Favorite</a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/ari-pramuja/"><i class="fas fa-address-card"></i>About Us</a>
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
