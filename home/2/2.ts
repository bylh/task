console.log('hello world');
let x = {
    aa: 5,
    bb: 4
};
console.log(x);
let y = [1, 2, 8, 4, 5];
for (let x of y)
    console.log(x);
console.log(6 in y);
y.forEach((x) => {
    ++x;
});
console.log(y);
if (true) {
    console.log('不错的'); // 注释模糊
}



