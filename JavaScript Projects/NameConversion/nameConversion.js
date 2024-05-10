// Assigning Varibales
const btn = document.querySelector("#convert-btn");
let camel = document.getElementById("camel-case");
let pascal = document.getElementById("pascal-case");
let snake = document.getElementById("snake-case");
let screamingSnake = document.getElementById("screaming-snake-case");
let kebabCase = document.getElementById("kebab-case");
let screamingKebab = document.getElementById("screaming-kebab-case");

// Event Listener
btn.addEventListener("click", function () {
  // Fetching content from text box
  const text = document.getElementById("text").value;

  //   Camel Case
  const [camelFirst, camelLast] = text.toLowerCase().trim().split(" ");
  camel.textContent = `${camelFirst}${camelLast.replace(
    camelLast[0],
    camelLast[0].toUpperCase()
  )}`;

  //   Pascal Case
  const [pascalFirst, pascalLast] = text.toLowerCase().trim().split(" ");
  pascal.textContent = `${pascalFirst.replace(
    pascalFirst[0],
    pascalFirst[0].toUpperCase()
  )}${pascalLast.replace(pascalLast[0], pascalLast[0].toUpperCase())}`;

  //   Snake Case
  snake.textContent = text.toLowerCase().trim().split(" ").join("_");

  //   Screming Snake Case
  screamingSnake.textContent = text.toUpperCase().trim().split(" ").join("_");

  //   Kebab Case
  kebabCase.textContent = text.toLowerCase().trim().split(" ").join("-");

  //   Screaming Kebab Case
  screamingKebab.textContent = text.toUpperCase().trim().split(" ").join("-");
});
