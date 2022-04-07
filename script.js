const display = document.querySelector('.output')
const nums = document.querySelectorAll('.button')

const plus = document.querySelector('#plus')
const equal = document.querySelector('#equal')
const minus = document.querySelector('#minus')
const multiplier = document.querySelector('#multiply')
const dot = document.querySelector('#dot')
const divider = document.querySelector('#divide')
const deleted = document.querySelector('#delete')
const clear = document.querySelector('#clear')

dot.disabled = false
//StoreOperand
let a = 0;
//ActiveOperand
let b = 0;
let result = '';
let operator = ''
display.textContent = 0;

let coinFlip = false;

function add(a, b) {
    return Number(a) + Number(b)
}
function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate() {
    if (b == 0 || b == '') {
        display.textContent = 'NAN'
    } else if (operator == '+') {
        result = (add(a, b))
        display.textContent = (Math.round(result * 100) / 100)
    } else if (operator == '-') {
        result = substract(a, b)
        display.textContent = (Math.round(result * 100) / 100)
    } else if (operator == '*') {
        result = multiply(a, b)
        display.textContent = (Math.round(result * 100) / 100)
    } else if (operator == '/') {
        result = divide(a, b)
        display.textContent = (Math.round(result * 100) / 100)
    }
}

nums.forEach((num) => {
    num.addEventListener('click', () => {
        if (display.textContent == result) {
            display.textContent = ''
        }
        if (coinFlip == true) {
            display.textContent = b
        }
        if (display.textContent == 0 && display.textContent != '0.') {
            display.textContent = Number(display.textContent) + Number(num.id)
        } else {
            display.textContent = display.textContent + num.id
        }
        b = display.textContent
        num.classList.add('orange')
        setTimeout(function () {
            num.classList.remove('orange');
        }, 100);
    })
})




plus.addEventListener('click', () => {
    if (coinFlip === true) {
        operate()
        b = ''
    }
    if (result == '') {
        a = Number(b)
        b = ''
    }
    else {
        a = result
    }

    operator = '+'

    coinFlip = true
    plus.classList.add('orange')
    setTimeout(function () {
        plus.classList.remove('orange');
    }, 100);
})
minus.addEventListener('click', () => {
    if (coinFlip === true) {
        operate()
        b = ''
    }
    if (result == '') {
        a = Number(b)
        b = ''
    }
    else {
        a = result
    }

    operator = '-'

    coinFlip = true
    minus.classList.add('orange')
    setTimeout(function () {
        minus.classList.remove('orange');
    }, 100);
})
multiplier.addEventListener('click', () => {
    if (coinFlip === true) {
        operate()
        b = ''
    }
    if (result == '') {
        a = Number(b)
        b = ''
    }
    else {
        a = result
    }

    operator = '*'

    coinFlip = true
    multiplier.classList.add('orange')
    setTimeout(function () {
        multiplier.classList.remove('orange');
    }, 100);
})
divider.addEventListener('click', () => {
    if (coinFlip === true) {
        operate()
        b = ''
    }
    if (result == '') {
        a = Number(b)
        b = ''
    }
    else {
        a = result
    }

    operator = '/'

    coinFlip = true
    divider.classList.add('orange')
    setTimeout(function () {
        divider.classList.remove('orange');
    }, 100);
})
dot.addEventListener('click', () => {
    display.textContent = `${display.textContent}.`
    b = display.textContent
    dot.classList.add('orange')
    setTimeout(function () {
        dot.classList.remove('orange');
    }, 100);
    dot.disabled = true
    dot.classList.add('orange')
    setTimeout(function () {
        dot.classList.remove('orange');
    }, 100);



})
deleted.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
    if (display.textContent.indexOf('.') == -1) {
        dot.disabled = false
    }
    if (display.textContent == '') {
        display.textContent = 0
    }
    b = display.textContent
    deleted.classList.add('orange')
    setTimeout(function () {
        deleted.classList.remove('orange');
    }, 100);

})
clear.addEventListener('click', () => {
    a = 0
    b = 0
    display.textContent = 0;
    result = ''
    coinFlip = false
    dot.disabled = false
    clear.classList.add('orange')
    setTimeout(function () {
        clear.classList.remove('orange');
    }, 100);

})



equal.addEventListener('click', operate)
equal.addEventListener('click', () => {
    equal.classList.add('orange')
    setTimeout(function () {
        equal.classList.remove('orange');
    }, 100);
})
