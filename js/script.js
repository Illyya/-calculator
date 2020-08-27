let length = document.querySelector('#square');
let result = document.querySelector('.calc-1__output');

function sp (a) {
    let s = a * a;
    let p = a * 4;
    return 'Площадь ' + s + ' Периметр ' + p;
};

length.oninput = function() {
    result.textContent = sp(length.value);
}