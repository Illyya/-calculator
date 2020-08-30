let radius = document.querySelector('#circle');
let result3 = document.querySelector('.calc-3__output');

function cr (a) {
    let s = Math.round(a * a * 3.1415);
    let p = Math.round(2 * 3.1415 * a);
     return 'Площадь ' + s + ' Длина окружности ' + p;
};

radius.oninput = function() {
    result3.textContent = cr(radius.value);
}