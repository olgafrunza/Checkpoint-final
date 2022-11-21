/* eslint-disable no-unused-vars, no-prototype-builtins */
function reduceRight(arr, start, func) {
    for (let i = arr.length - 1; i >= 0; i--) {
        start = func(start, arr[i]);
    }
    return start;
}
