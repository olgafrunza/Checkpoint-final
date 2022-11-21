/* eslint-disable no-unused-vars, no-prototype-builtins */

function aQuarter(func) {
    let count = 0;
    return function(...args) {
        if (count === 3) {
            count = 0;
            return func(...args);
        }
        else {
            count++;
            return "something went wrong :/";
        }
    };
}
