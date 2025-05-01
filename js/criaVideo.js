import { ux } from "./ux.js";



const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", async (event) => {
  event.preventDefault();

  await ux.criarVideo();
});