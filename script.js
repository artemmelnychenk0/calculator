const display = document.querySelector('.output')
const nums = document.querySelectorAll('.numbers button')

const plus = document.querySelector('#plus')
const equal = document.querySelector('#equal')
const minus = document.querySelector('#minus')
const multiplier = document.querySelector('#multiply')
const divider = document.querySelector('#divide')
const clear = document.querySelector('#clear')
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
    if (operator == '+') {
        result = (add(a, b))
        display.textContent = result
    } else if (operator == '-') {
        result = substract(a, b)
        display.textContent = result
    } else if (operator == '*') {
        result = multiply(a, b)
        display.textContent = result
    } else if (operator == '/') {
        result = divide(a, b)
        display.textContent = result
    } else {
        console.log('Oops it is not working')
    }
}

nums.forEach((num) => {
    num.addEventListener('click', () => {
        if (display.textContent == result) {
            display.textContent = ''
        }
        if (display.textContent == 0) {
            display.textContent = Number(display.textContent) + Number(num.id)
        } else {
            display.textContent = display.textContent + num.id
        }
        b = display.textContent

    })
})

plus.addEventListener('click', () => {
    if (coinFlip === true) {
        operate()
        b = ''
    } else {
        b = display.textContent
        display.textContent = '';
    }

    if (result == '') {
        a = Number(b)
    }
    else {
        a = result
    }

    operator = '+'

    coinFlip = true

})
minus.addEventListener('click', () => {
    if (coinFlip === true) {
        operate()
        b = ''
    } else {
        b = display.textContent
        display.textContent = '';
    }

    if (result == '') {
        a = Number(b)
    }
    else {
        a = result
    }

    operator = '-'

    coinFlip = true
})
multiplier.addEventListener('click', () => {
    if (coinFlip === true) {
        operate()
        b = ''
    } else {
        b = display.textContent
        display.textContent = '';
    }

    if (result == '') {
        a = Number(b)
    }
    else {
        a = result
    }

    operator = '*'

    coinFlip = true
})
divider.addEventListener('click', () => {
    if (coinFlip === true) {
        operate()
        b = ''
    } else {
        b = display.textContent
        display.textContent = '';
    }

    if (result == '') {
        a = Number(b)
    }
    else {
        a = result
    }

    operator = '/'

    coinFlip = true
})
clear.addEventListener('click', () => {
    a = 0
    b = 0
    display.textContent = 0;
    result = ''
    coinFlip = false
})


equal.addEventListener('click', operate)

