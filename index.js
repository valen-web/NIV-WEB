console.log("hola");

const words = {
    PINK: "KINP", 
    FLOWER: "RWEOLF",
    HELLO: "OLEHL"}

let tries = "";

function getRandomWord() {
    const keys = Object.keys(words);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return words[randomKey];
}
function displayRandomWord() {
    const randomWordElement = document.getElementById('radom_word').querySelector('p');
    randomWordElement.textContent = getRandomWord();
    const randomWord = getRandomWord()
    generateInputs(randomWord.length);
}

function generateInputs(length) {
    const wordInputElement = document.getElementById("word_input");
    wordInputElement.innerHTML = '';
    for (let i = 0; i < length; i++) {
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("maxlength", "1"); 
        wordInputElement.appendChild(input);
    }
}

displayRandomWord()