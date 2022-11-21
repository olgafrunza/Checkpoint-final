/* eslint-disable no-unused-vars, no-prototype-builtins */

function alternate(func) {
    let count = 0;
    return function() {
        count++;
        if (count % 2 === 1) {
            return func();
        }
    };
}

function twice(func) {
    let count = 0;
    return function() {
        count++;
        if (count <= 2) {
            return func();
        }
        else {
            return 0;
        }
    };
}
