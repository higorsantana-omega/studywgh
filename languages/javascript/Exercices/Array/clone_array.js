var array_Clone = function(arr) {
    return arr.slice(0)
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));