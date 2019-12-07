function getCode(input) {
    var myString = "something format_abc";
    var myRegexp = /(?:.*)code=(.*?)(?:&|$)/g;
    var match = myRegexp.exec(input);
    return match[1];
}

function parseJsonX(input) {
    return  JSON.stringify(input);
}

function concatArray(verses, input) {
    var out = verses.concatArray(input);
    return out;
}