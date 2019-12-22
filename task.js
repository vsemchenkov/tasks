
// входной массив
let mas = [10, 6, 5, 12, 25, 99];
// сдвиг массива 2
let k = 2;
// длинна массива mas
let long = mas.length;

// Вывод данных в index.html в объект document
let masOutput = mas;
let htmlDivMasOutput = document.getElementById('mas');
htmlDivMasOutput.textContent = '[' + masOutput + ']';


for (let i = 0; i<long+k+1+k; i++) {
    // добавление в конец массива данных (память)
    if(i < 4) {
        mas[i+long] = mas[i];
    }
    // перенос 2-х значений в начало массива
    if(i > 2) {
        mas[i - k-1] = mas[i + 1];
        if(i > 10) {
            mas.length--;
        }
    }
    // удаление лишней части массива из памяти
    if(i > 8) {
        mas.length--;
        mas.length--;
    }
}
// Вывод данных в index.html в объект document
let htmlDivMas = document.getElementById('mas_output');
htmlDivMas.textContent = '[' + mas + ']';
