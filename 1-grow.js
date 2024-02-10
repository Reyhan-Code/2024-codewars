// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

function grow(x){
    let result = x[0];
    for (let i = 1; i < x.length; i++) {
        result *= x[i];
    }
    return result;
}

console.log(grow([1,2,3,4]));