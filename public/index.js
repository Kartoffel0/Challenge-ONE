const inputTextarea = document.getElementById('textInput');
const outputTextarea = document.getElementById('textOutput');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const outputData = document.getElementById('outputData');
const outputNoData = document.getElementById('outputNoData');
const copybtn = document.getElementById('copyOutputBtn');
const keys = [[1,'e','enter'], [2,'i','imes'], [3,'a','ai'], [4,'o','ober'], [5,'u','ufat']];

function processText(operation) {
    let text = inputTextarea.value
    if(text.search(/[^a-z\s]/) != -1) {
        if (operation === 0) {
            encryptBtn.innerText = 'Texto inválido';
        } else {
            decryptBtn.innerText = 'Texto inválido';
        }
    } else {
        if (operation === 0) {
            encryptBtn.innerText = 'Criptografar';
            keys.forEach(r => text = text.replaceAll(r[1], r[0]));
            keys.forEach(r => text = text.replaceAll(r[0], r[2]));
        } else {
            decryptBtn.innerText = 'Descriptografar';
            keys.forEach(r => text = text.replaceAll(r[2], r[0]));
            keys.forEach(r => text = text.replaceAll(r[0], r[1]));
        }
        outputTextarea.value = text;
        outputNoData.style.display = 'none';
        outputData.style.display = 'flex';
    }
}

function encrypt() {
    let text = inputTextarea.value;
    keys.forEach(r => text = text.replaceAll(r[1], r[0]));
    keys.forEach(r => text = text.replaceAll(r[0], r[2]));
    console.log(text);
    outputTextarea.value = text;
    outputNoData.style.display = 'none';
    outputData.style.display = 'flex';
}

encryptBtn.addEventListener('click', () => {processText(0)});
decryptBtn.addEventListener('click', () => {processText(1)});
copybtn.addEventListener('click', () => {navigator.clipboard.writeText(outputTextarea.value)});
