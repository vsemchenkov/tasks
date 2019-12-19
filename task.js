
    // входной массив
    let mas = ["Конь", "Лошадь", "Волк", "Волчица", "Бизон", "Бизониха)"];
    // шаг массива 2
    let leng = mas.length;
    let k = 2;

    console.log(mas);

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
