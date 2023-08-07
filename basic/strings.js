const str_1 = "kain"
const str_2 = "kain"

function areEqualCaseInsensitive(str_1, str_2) {
    return str_1.toUpperCase() === str_2.toUpperCase();
}

console.log(areEqualCaseInsensitive(str_1, str_2));