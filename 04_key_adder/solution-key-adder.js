/* eslint-disable no-unused-vars, no-prototype-builtins */

function keyAdder() {
    let values = Object.values(this);
    return values
        .filter(el => typeof el === "number")
        .reduce((accum, curEl) => accum + curEl, 0);
}
