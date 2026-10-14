var heading = document.getElementById("heading-text");
var input = document.getElementById("heading-input");
var button = document.getElementById("heading-button");

button.addEventListener("click", () => {
    heading.textContent = (input.value.trim() !== "") ? input.value : "Hello World!";
});