
    // входной массив
    let mas = ["Конь", "Лошадь", "Волк", "Волчица", "Бизон", "Бизониха)"];
    // переменная с длинной массива
    let leng = mas.length;
    // Шаг ключей в массиве (свиг)
    let k = 2;
    // вывод в консоль переменной с массивом
    console.log(mas);

    // Цикл сдвига ключей массива на сдвиг ( повторная перезапись значений на +2 ключа)
    for (let i = leng - 1; i >= 0; i--) {
        mas[i + k] = mas[i];
    }
    // Цикл перезаписи последних 2-х ключей массива в начало массива
    for (let i = 0; i < k; i++) {
        mas[i] = mas[mas.length-i-1];
    }
    // Удаление в массиве последних ключей массива
    for (let i = k; i > 0; i--) {
        mas.length--;
    }
    // Вывод в консоль выходного массива
    console.log(mas);
