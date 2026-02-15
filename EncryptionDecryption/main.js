var key = 5;
var range = 26;
var aCode = 65;
var zCode = range + aCode;
var input = document.getElementById("input");
var encrypts = document.getElementById("encrypts");
var decrypts = document.getElementById("decrypts");
var output = document.getElementById("output");
encrypts.onclick = encipher;
function encipher() {
    var message = input.value.toUpperCase(); //gets uer input and converts to uppercase
    output.innerHTML = ""; //every time the button is clicked, the output is cleared
    for (var i = 0; i < message.length; i++) {
        var letter = message.charCodeAt(i); //gets the unicode value of the character at index i
        var newletter = letter;
        //if the character is a letter add the shift key
        if (letter >= aCode && letter < zCode) {
            newletter += key;
            //ensure that the new code is a letter
            if (newletter >= zCode) {
                newletter -= range;
            }
        }
        newletter = String.fromCharCode(newletter);
        output.innerHTML += newletter; //adds the new letter to the output
    }
}
/* Decryption fuction */
decrypts.onclick = decipher;
function decipher() {
    var message = input.value.toUpperCase(); //gets uer input and converts to uppercase
    output.innerHTML = ""; //every time the button is clicked, the output is cleared
    for (var i = 0; i < message.length; i++) {
        var letter = message.charCodeAt(i); //gets the unicode value of the character at index i
        var newletter = letter;
        //if the character is a letter subtract the shift key
        if (letter >= aCode && letter < zCode) {
            newletter -= key;
            //ensure that the new code is a letter
            if (newletter < aCode) {
                newletter += range;
            }
        }
        newletter = String.fromCharCode(newletter);
        output.innerHTML += newletter; //adds the new letter to the output
    }
}