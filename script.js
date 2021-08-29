do {
    var num = +prompt('Сколько примеров вы хотите решить: ');
} while (isNaN(num));

function Numbers(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function Symbols() {
    return Math.floor(Math.random() * (6 - 1) + 1);
}

for (let i = 0; i < num; i++) {

    let num1 = Numbers(1, 20);
    let num2 = Numbers(1, 20);
    let symbols = Symbols();
    let example = 0;


    if (symbols == 1) {
        example = num1 + num2;
        symbols = "+";
    } else if (symbols == 2) {
        example = num1 - num2;
        symbols = "-";
    } else if (symbols == 3) {
        example = num1 * num2;
        symbols = "*";
    } else if (symbols == 4) {
        example = num1 / num2;
        symbols = "/";
    } else if (symbols == 5) {
        example = num1 % num2;
        symbols = "%";
    }

    let answer = +prompt(num1 + symbols + num2);
    document.write(example == answer ? " Ваш ответ верный - " + answer + "." : " Ваш ответ не верный - " + answer + "! " + " Верный ответ: " + example + ". ");
}