let display = document.getElementById('display');

let inputCE = document.querySelector('.inputCE');
inputCE.onclick = function () {
    display.value = '';
};

let inputC = document.querySelector('.inputC');

inputC.onclick = function () {
    display.value = '';
};

let inputBS = document.querySelector('.inputBS');

inputBS.onclick = function () {
    display.value = display.value.toString().slice(0, -1);
};

let inputBSS = document.querySelector('.inputBSS');

inputBSS.onclick = function () {
    display.value += "/";
};

let input7 = document.querySelector('.input7');

input7.onclick = function () {
    display.value += "7";
};


let input8 = document.querySelector('.input8');

input8.onclick = function () {
    display.value += "8";
};
``

let input9 = document.querySelector('.input9');

input9.onclick = function () {
    display.value += "9";
};


let inputmulti = document.querySelector('.inputmulti');

inputmulti.onclick = function () {
    display.value += "*";
};


let input4 = document.querySelector('.input4');

input4.onclick = function () {
    display.value += "4";
};


let input5 = document.querySelector('.input5');

input5.onclick = function () {
    display.value += '5';
};


let input6 = document.querySelector('.input6');

input6.onclick = function () {
    display.value += '6';
};


let inputminus = document.querySelector('.inputminus');

inputminus.onclick = function () {
    display.value += '-';
};


let input1 = document.querySelector('.input1');

input1.onclick = function () {
    display.value += '1';
};


let input2 = document.querySelector('.input2');

input2.onclick = function () {
    display.value += '2';
};


let input3 = document.querySelector('.input3');

input3.onclick = function () {
    display.value += '3';
};


let inputplus = document.querySelector('.inputplus');

inputplus.onclick = function () {
    display.value += '+';
};


let inputpercent = document.querySelector('.inputpercent');

inputpercent.onclick = function () {
    display.value += '%';
};

let inputZero = document.querySelector('.inputZero');

inputZero.onclick = function () {
    display.value += '0';
};


let inputDot = document.querySelector('.inputDot');

inputDot.onclick = function () {
    display.value += '.';
};


let inputEvaluation = document.querySelector('.inputEvaluation');

inputEvaluation.onclick = function () {
    display.value = eval(display.value);
};
