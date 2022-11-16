const menu = document.querySelector(".navbar__menuBar");
const bambar = document
  .querySelector(".navbar__hambar") //
  .addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
