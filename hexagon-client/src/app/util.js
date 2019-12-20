function getCode(input) {
    var myString = "something format_abc";
    var myRegexp = /(?:.*)code=(.*?)(?:&|$)/g;
    var match = myRegexp.exec(input);
    return match[1];
}

function stringifyJson(input) {
    return  JSON.stringify(input);
}

function parseJson(input) {
  return  JSON.parse(input);
}

function getRoles(input) {
  return  input["roles"]
}

function getUsername(input) {
  return  input["cognito:username"]
}

function concatArray(verses, input) {
    var out = verses.concatArray(input);
    return out;
}
