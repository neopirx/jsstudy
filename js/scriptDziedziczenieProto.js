var arr = [1, 2];

console.log(arr.indexOf(1));

arr.indexOf = function() {
    return false;
}

console.log(arr.indexOf(1));