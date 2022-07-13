//referenc given below
//const hasDuplicate = arr => new Set(arr).size !== arr.length;

function hasDuplicate (arr) {
    let set1 = new Set(arr);
    console.log(set1);
    if (set1.size == arr.length) {
        return true;
    } else {
        return false;
    }
}

console.log(hasDuplicate([1,3,2,1])); //true
console.log(hasDuplicate([1,3,2,6])); //true

