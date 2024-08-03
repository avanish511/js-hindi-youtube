const myNu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const b = myNu.reduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(b) // 55