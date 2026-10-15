const heading = document.getElementById("heading-text");
const input = document.getElementById("heading-input");
const button = document.getElementById("heading-button");

const secret_heading = [
    "Вот такая хуйня собачка",
    "Дальше — больше",
    "Это фиаско, братан",
    "Минут пять десять пятого",
    "Сикс севен",
    "Ну это база",
    "Кринж",
    "Изи катка",
    "Ебать, ты лох",
    "Я в домике",
    "Шок-контент"
];

if(localStorage.getItem("heading-text")!==null){
    heading.textContent = localStorage.getItem("heading-text");
}

button.addEventListener("click", () => {
    let text = (input.value.trim() !== "") ? input.value : "Hello World!";
    if(text == "SECRET_1"){
        text = GetSecret();
    }
    heading.textContent = text;
    localStorage.setItem("heading-text", text);
});

function GetSecret(){
    let index = Math.floor(Math.random() * secret_heading.length);
    return secret_heading[index];
}