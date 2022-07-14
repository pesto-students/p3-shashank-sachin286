//referenc given below
//const hasDuplicate = arr => new Set(arr).size !== arr.length;

function hasDuplicate (arr) {
    if (new Set(arr).size == arr.length) {
        return true;
    } else {
        return false;
    }
}

console.log(hasDuplicate([1,3,2,1])); //true
console.log(hasDuplicate([1,3,2,6])); //true

