/*
function makeLouder(str) {
    return str.toUpperCase();
}

function makeQuieter(str) {
    return str.toLowerCase();
}
    */

function makeLouder(str) {
    let result = '';
    for (let char of str) {
        const code = char.charCodeAt(0);
        if (code >= 97 && code <=122) {
            result += String.fromCharCode(code-32);
        } else {
            result += char;
        }
    }
    return result;
}

function makeQuieter(str) {
    let result = '';
    for (let char of str) {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <=90) {
            result += String.fromCharCode(code + 32);
        } else {
            result += char;
        }
    }
    return result;
}