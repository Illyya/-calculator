let length1 = document.querySelector('#side-1');
let length2 = document.querySelector('#side-2');
let result2 = document.querySelector('.calc-2__output');

function re (a, b) {
    let s = a * b;
    let p = a * 2 + b * 2;
     return 'Площадь ' + s + ' Периметр ' + p;
};

length2.oninput = function() {
    result2.textContent = re(length1.value, length2.value);
}

