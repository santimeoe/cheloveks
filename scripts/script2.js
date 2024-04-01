const text = "Your text goes here."; // Replace with your desired text
const delay = 100; // Delay between typing each character

const titleElement = document.getElementById('typing-animation');
let index = 0;

function type() {
    if (index < text.length) {
        titleElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, delay);
    }
}

type();
