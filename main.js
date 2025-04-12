let display = document.getElementById('display')

function insert(num) {
    display.innerHTML += num
}

function clean() {
    display.innerHTML = ''
}

function equal() {
    let exp = display.innerHTML;
    if (exp) {
        let result = eval(exp);
        if (result % 1 === 0) { // перевірка, чи є у результаті залишок
            display.innerHTML = result.toFixed(0) // якщо немає залишку, зводимо до 0 знаків після коми
        } else {
            display.innerHTML = result.toFixed(2) // якщо є залишок, зводимо до 2 знаків після коми
        }
    }
}