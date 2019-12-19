
    // входной массив
    let mas = [10, 6, 5, 12, 25, 99];
    // шаг массива 2
    let leng = mas.length;
    let k = 2;

    for (let i = leng - 1; i >= 0; i--) {
        mas[i + k] = mas[i];
    }
    for (let i = 0; i < k; i++) {
        mas[i] = mas[mas.length-i-1];
    }
    for (let i = k; i > 0; i--) {
        mas.length--;
    }
    console.log(mas);
