let trLength1 = document.querySelector('#tr1');
let trLength2 = document.querySelector('#tr2');
let trLength3 = document.querySelector('#tr3');
let trResult = document.querySelector('.calc-4__output');
let trLengths = [trLength1, trLength2, trLength3];

function tr (a, b, c) {
    let pp = a + b + c;
    let p = pp / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
     return 'Площадь ' + s;
    };

for (let i = 0; i < trLengths.length; i++) {
    trLengths[i].oninput = function() {
        trResult.textContent = tr(trLength1.value, trLength2.value, trLength3.value);
    }    
}
