//create a memoise function

function memoize(func) {
    const cache = new Map();
    return function (...args){
        const key = args.toString();
        if (cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, func(...args));
        console.log("printing cache", cache);
        return cache.get(key);
    };
}

function add(a,b) {
    console.log("function called for operation", a+b);
    return a+b;
}

const memoiseAdd = memoize(add);
console.time();
memoiseAdd(100,100);
console.timeEnd();
console.time();
memoiseAdd(100,200);
console.timeEnd();
console.time();
memoiseAdd(100,100);
console.timeEnd();
console.time();
memoiseAdd(100,200);
console.timeEnd();
