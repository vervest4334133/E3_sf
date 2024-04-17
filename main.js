// №1
function funcSomefunc() {
    const massiv = [null, 0, 1, 2, 3, 4, 5, NaN, 'a']

    let one = 0
    let two = 0
    let zero = 0

    for (let i = 0; i < massiv.length; i++) {
        if (typeof massiv[i] === 'number' && !isNaN(massiv[i])) {
            if (massiv[i] === 0) {
                zero += 1;
            } else if (massiv[i] % 2 === 0) {
                two += 1;
            } else {
                one += 1;
            }
        }
    }
    return (console.log('чётные: ', two),
    console.log('нечётные: ', one),
    console.log('ноль: ', zero))
}

funcSomefunc()


//2
function number(a) {
    let isSimple, result;
    isSimple = true;

    if (a > 1 && a <= 1000) {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                isSimple = false;
            }
        }
        result = isSimple ? 'Число ${a} - простое число' : 'Число ${a} - составное число';
    } else if (a > 1000) {
        result = 'Данные неверны';
    }
    return result;
}

number(666)


// №3
function first(a) {
    return function second(b) {
        result = a + b
        return result
    };
}

const sum = first(5)
const sumRes = sum(5)

console.log(sumRes)


// №4
function numbers(first, second) {
    let num = first;

    let count = setInterval(function() {
        console.log(num);

        if (num === second) {
            clearInterval(count);
        }
        num++;
    }, 1000);
}

numbers(5, 15);


// №5
const quad = (x, n) => {
    result = x ** n
    return result
}

console.log(quad(2, 3))