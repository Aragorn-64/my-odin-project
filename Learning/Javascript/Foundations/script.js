function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function lastLetter(str){
    return str.charAt(str.length - 1);
}

console.log(capitalize('heLLo'));
console.log(lastLetter('abcd'));


