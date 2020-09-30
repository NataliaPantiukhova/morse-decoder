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

function decode(expr) {
    let result='';
    for(let i = 0;i < expr.length / 10; i++){
        let letter = expr.substr(i * 10, 10);
        if (letter == '**********'){
            result += ' ';
            continue;
        }
        let double = '';
        for(let j = 10; j > 0; j -= 2){
            if(letter.slice(j - 2,j) == '10')
            double += '.';
            if(letter.slice(j - 2,j) == '11')
            double += '-';
        }
        result += MORSE_TABLE[double.split("").reverse().join("")];
    }
    return result;
}

module.exports = {
    decode
}
