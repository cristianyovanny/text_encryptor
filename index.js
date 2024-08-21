document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");
    const encryptButton = document.getElementById("encryptButton");
    const decryptButton = document.getElementById("decryptButton");
    const copyButton = document.getElementById("copyButton");

    function encrypt(text) {
        const replacements = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
        return text.replace(/[aeiou]/g, function(match) {
            return replacements[match];
        });
    }

    function decrypt(text) {
        const replacements = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
        return text.replace(/ai|enter|imes|ober|ufat/g, function(match) {
            return replacements[match];
        });
    }

    encryptButton.addEventListener("click", function() {
        let text = inputText.value;
        //console.log("Texto ingresado: ", text);

        if (text.length != 0) {
            let encryptedText = encrypt(text);
            outputText.innerText = encryptedText;
        }
        else {
            alert("Debes ingresar un texto para encriptar");
        }
    });

    decryptButton.addEventListener("click", function() {
        let text = inputText.value;
        if (text.length != 0) {
            let decryptedText = decrypt(text);
            outputText.innerText = decryptedText;
        }
        else {
            alert("Debes ingresar un texto para dencriptar");
        }
        
    });

    copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(outputText.innerText).then(function() {
            alert("Texto copiado al portapapeles");
        }, function(err) {
            alert("Error al copiar el texto: ", err);
        });
    });
});