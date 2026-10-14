const heading = document.getElementById("heading-text");
const input = document.getElementById("heading-input");
const button = document.getElementById("heading-button");

if(localStorage.getItem("heading-text")!==null){
    heading.textContent = localStorage.getItem("heading-text");
}

button.addEventListener("click", () => {
    let text = (input.value.trim() !== "") ? input.value : "Hello World!";
    heading.textContent = text;
    localStorage.setItem("heading-text", text);
});