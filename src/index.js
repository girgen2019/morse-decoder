const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const SPASE = "**********";

function decode(expr) {
    const codesArray = expr.match(/.{1,10}/g);
    return codesArray.map(code => convertToCharacter(code)).join("");
}

function convertToCharacter(encryptedCharacter) {
    if (SPASE === encryptedCharacter) {
        return " ";
    }
    const key = convertToMorseCode(encryptedCharacter);
    return convertToCharacterFromMorseTable(key);
}

function convertToMorseCode(encryptedSymbol) {
    const encryptedSymbolArray = encryptedSymbol.match(/.{1,2}/g);
    return encryptedSymbolArray.map(encryptedSymbol => convertToMorseCodeSymbol(encryptedSymbol)).join("");
}

function convertToMorseCodeSymbol(encryptedSymbol) {
    if (encryptedSymbol === "10") {
        return ".";
    }
    if (encryptedSymbol === "11") {
        return "-";
    }
    return "";
}

function convertToCharacterFromMorseTable(morseCode) {
    return MORSE_TABLE[morseCode];
}

module.exports = {
    decode
}