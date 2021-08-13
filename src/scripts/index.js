import "regenerator-runtime";
import "../styles/main.css";
import App from "./views/App";
import swRegister from "./utils/sw-register";
// import { WebSocketInitiator } from "./utils/websocket-initiator";
// import CONFIG from "./globals/config";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const app = new App({
  button: document.querySelector(".menu"),
  drawer: document.querySelector(".nav-list"),
  content: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
  document.querySelector(".container").scrollIntoView();
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
