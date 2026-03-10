const key = {
    'A': 'B', 'B': 'C', 'C': 'D', 'D': 'E', 'E': 'F', 'F': 'G', 
    'G': 'H', 'H': 'I', 'I': 'J', 'J': 'K', 'K': 'L', 'L': 'M', 
    'M': 'N', 'N': 'O', 'O': 'P', 'P': 'Q', 'Q': 'R', 'R': 'S', 
    'S': 'T', 'T': 'U', 'U': 'V', 'V': 'W', 'W': 'X', 'X': 'Y', 
    'Y': 'Z', 'Z': 'A',
    '1': '2', '2': '3', '3': '4', '4': '5', '5': '6', '6': '7', 
    '7': '8', '8': '9', '9': '0', '0': '1',
    '.': '+', ',': '=', '!': '?', '?': '_', ':': '/', ';': '|'
};

const reverseKey = Object.fromEntries(Object.entries(key).map(([k, v]) => [v, k]));

function encrypt() {
    let input = document.getElementById('inputText').value;
    input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    if(!input) return;

    const words = input.trim().split(/\s+/);
    const result = words.map(word => {
        return word.split('').map(char => key[char] || char);
    })

    document.getElementById('outputText').innerText = result;
}

function decrypt() {
    const input = document.getElementById('inputText').value.trim();
    if (!input) return;

    const result = words.map(word => {.map(char => reverseKey[char] || char);
    });

    document.getElementById('outputText').innerText = result;
}

function copyToClipboard() {
    const text = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(text);
    alert("Skopírované!");
}
