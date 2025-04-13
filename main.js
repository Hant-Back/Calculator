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
        try {
            if (exp.includes('/0')) { // перевірка наявності ділення на 0
                throw new Error("You cannot divide by 0"); // генеруємо помилку
            }
            let result = eval(exp);
            if (result % 1 === 0) {
                display.innerHTML = result.toFixed(0); // якщо немає залишку
            } else {
                display.innerHTML = result.toFixed(2); // якщо є залишок
            }
        } catch (error) {
            display.innerHTML = error.message; // виведення повідомлення про помилку
        }
    }
}