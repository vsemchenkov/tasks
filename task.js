
// входной массив
let mas = [10, 6, 5, 12, 25, 99];
// шаг массива 2
let k = 2;

for (let i = 0; i<k; i++) {
    mas.unshift(mas.pop());
}

console.log(mas);

// или

let mas2 = [10, 6, 5, 12, 25, 99];

mas2 = mas2.splice(-k).concat(mas2);

console.log(mas2);
