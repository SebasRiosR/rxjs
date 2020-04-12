const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.reduce((acc, curr) => {
    return acc + curr
}, 0));