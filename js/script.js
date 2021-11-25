// 1. С помощью функции prompt спросите у пользователя его страну проживания. Если пользователь ничего не ввел (пустая строка),
// выведите сообщение "Введите данные", если пользователь ввел число, выведите сообщение "Название не может быть числом";
let userCountry = prompt("Введите страну проживания");
if (userCountry.trim() === ''){
    alert("Введите данные");
} else if(!isNaN(userCountry) ){
    alert("Название не может быть числом");
}
// 2. С помощью prompt попросите пользователя ввести два числа. После чего выведите результат является ли второе число
// кратным первому числу;
let a = prompt ("Ведите первое число");
let b = prompt ("Ведите второе число");
if (a % b === 0){
    alert('Второе число кратно первому');
}
if (a % b !== 0){
    alert('Второе число не кратно первому');
}
// 3. С помощью prompt попросите пользователя ввести число. Сделать проверку на пустую строку и если значение является НЕ числом.
//     В результате вывести пользователю каким является число (четное или нечетное);
let c = prompt("Введите число");
if ((c.trim() !== '')&&(!isNaN(c))){
    if(c%2 === 0){
        alert(`Число ${c} четное`);
    } else {
        alert(`Число ${c} не четное`);
    }
}
// 4. Создайте скрипт, который просит ввести пользователя число от 1 до 100. Добавить проверку на то, что значние является числом,
//     на пустую строку, и на заданный диапазон (не меньше 1 и не больше 100). Выведите пользователю ответ в какой четверти лежит число.
// 1-25 (первая четверь), 26-50 (вторая четверть), 51-75 (третья четверть), 76-100 (четвертая четверть);
let d = prompt("Ведите число от 1 до 100");
if ((!isNaN(d))&&(d.trim() !== '')&&(d>0)&&(d<=100)){
    if((d>0)&&(d<=25)){
        alert(`Число лежит ${d} в первой четверти`);
    }
    if((d>=26)&&(d<=50)){
        alert(`Число лежит ${d} во второй четверти`);
    }
    if((d>=51)&&(d<=75)){
        alert(`Число лежит ${d} в третей четверти`);
    }
    if((d>=75)&&(d<=100)){
        alert(`Число лежит ${d} в четвертой четверти`);
    }
}
// 5. Создайте скрипт, который в цикле будет выводить простые числа от 1 до 500;
for (let i = 2; i<=500; i++) {
    let prime = i;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = null
        }
    }
    if (prime) {
        console.log(prime);
    }
}
// 6. Создайте скрипт, который выведет числа от 1000 до 300 в обратном порядке;
for (let i = 1000; i >= 300; i--){
    console.log(i);
}
// 7. Попросите пользователя ввести число. Выведите результат сложения, вычетания, деления и умножения введенного числа на все
// числа от 1 до 100.
let e = prompt("Введите число");
if ((!isNaN(e))&&(e.trim() !== '')){
    for (let i = 1; i <= 100; i++) {
        console.log(`Сумма числа ${e} и ${i} равна ${+e + i}`);
        console.log(`Разность числа ${e} и ${i} равна ${+e - i}`);
        console.log(`Деление числа ${e} и ${i} равна ${+e / i}`);
        console.log(`Умножение числа ${e} и ${i} равна ${+e * i}`);
    }
}
// 8. Создайте простой калькулятор. Попросите пользователя первый операнд, знак и второй операнд. Отобразите пользователю результат
// выполнения математического действия. Например: ввели 10, ввели "+", ввели 20 (3 вызова prompt), результат - 30 (вывести в alert).
// Знаки могут быть "+", "-", "*", "/". Так же добавьте проверки на ввод двух операндов и знака. При делении добавьте обработку
// деления на ноль. Если происходит деление на ноль - вывести сообщение "На 0 делить нельзя".
let firstOperand = prompt("Введите первый операнд");
let mathematicalSign = prompt("Введите Знак");
let secondOperand = prompt("Введите второй операнд");
if ((!isNaN(firstOperand))&&(firstOperand.trim() !== '')&&
    (!isNaN(secondOperand))&&(secondOperand.trim() !== '')&&
    (mathematicalSign === '+')||(mathematicalSign === '-')||(mathematicalSign === '*')||(mathematicalSign === '/')){
    if(mathematicalSign === '+'){
        alert(`${firstOperand} ${mathematicalSign} ${secondOperand} = ${+firstOperand + +secondOperand}`);
    }
    if(mathematicalSign === '-'){
        alert(`${firstOperand} ${mathematicalSign} ${secondOperand} = ${+firstOperand - +secondOperand}`);
    }
    if(mathematicalSign === '*'){
        alert(`${firstOperand} ${mathematicalSign} ${secondOperand} = ${+firstOperand * +secondOperand}`);
    }
    if((mathematicalSign === '/')&&(+secondOperand !==0)){
        alert(`${firstOperand} ${mathematicalSign} ${secondOperand} = ${+firstOperand / +secondOperand}`);
    }
    if((mathematicalSign === '/')&&(+secondOperand ===0)){
        alert('На 0 делить нельзя');
    }
}
// 9. Создайте игру "Угадай число". Попросите пользователя ввести сумму денег, которую он хочет поставить на игру. Попросите
// ввести диапазон чисел, в котором он хочет играть (например, от a до b). Выведите сумму, которую получит пользователь в том
// случае, если угадает число. Сумма приза рассчитывается по формуле (b - a) * 0.1 + введенная пользователем сумма денег.
//     После чего запросите пользователя ввести число, добавьте проверку на заданный пользователем в начале диапазон (от а до b).
// После ввода пользователем числа, сформируйте в скрипте рандомное число в заданном пользователем диапазоне (от a до b)
// (погуглите как получить рандомное число от числа до числа) и сравните введное пользователем число и сформированное рандомное
// скриптом число. Если числа совпали, выведите в alert текст приветствия и сумму выигрыша, иначе сообщите о поражении и
// проигранное сумме. Не забудьте проверки типов данных и пустой строки на каждом пользовательском вводе;
let stakeAmount;
let rangeStart;
let rangeEnd;
let prize;
let bet;
let winningNumber;
stakeAmount = prompt("Введите сумму ставки");
if ((!isNaN(stakeAmount)) && (stakeAmount !== '') && (stakeAmount !== ' ') && (stakeAmount !== null)) {
    rangeStart = prompt("Видите начало диапазона");
    if ((!isNaN(rangeStart)) && (rangeStart !== '') && (rangeStart !== ' ') && (rangeStart !== null) && (Number.isInteger(rangeStart))) {
        rangeEnd = prompt("Видите конец диапазона");
        if ((!isNaN(rangeEnd)) && (rangeEnd !== '') && (rangeEnd !== ' ') && (rangeEnd !== null) && (rangeStart < rangeEnd) && (Number.isInteger(rangeEnd))) {
            prize = (+rangeEnd - +rangeStart) * 0.1 + +stakeAmount;
            bet = prompt(`Введите число от ${rangeStart} до ${rangeEnd} . Призовой фонд ${prize} грн`)
            if ((!isNaN(bet)) && (bet !== '') && (bet !== ' ') && (bet !== null) && ((bet >= rangeStart) && (bet <= rangeEnd)) && (Number.isInteger(bet))) {
                winningNumber = Math.round(+rangeStart + Math.random() * (+rangeEnd + 1 - +rangeStart));
                if (+bet === winningNumber) {
                    alert(`ПОЗДРАВЛЯЕМ ВЫ ВЫГРАЛИ ${prize} ГРН`)
                } else {
                    alert(`К сожалению вы проиграли ${stakeAmount} грн`)
                }
            }
            if ((!isNaN(bet)) && (bet !== '') && (bet !== ' ') && (bet !== null) && ((bet < rangeStart) || (bet > rangeEnd))) {
                alert("Ставка не в ходит в диапазон")
            }
        }
        if ((!isNaN(rangeEnd)) && (rangeEnd !== '') && (rangeEnd !== ' ') && (rangeEnd !== null) && (rangeStart > rangeEnd)) {
            alert("Конец диапазона меньше чем начало")
        }
    }
}
// 10. Создайте игру "Камень-ножницы-бумага". Попросите пользователя ввести строкой одно из значений. Проверьте правильность ввода.
//     Далее в скрипте напишите логику рандомного выбора одного из элементов игры и отобразите этот элемент пользователю.
//     Введенный результат пользователя и сформированный скриптом рандомный результат обработайте по правилам игры.
//     В зависимости от результата выведите пользователю сообщенение о том выиграл он или проиграл.
//     Например: пользователь вводит Бумага, скрипт выводит Камень (рандомно сформированный результат), пользователю выводится
// сообщение о победе;
let handValue;
let randHand;
let hands = ['камень', 'ножницы', 'бумага']
handValue = prompt("Введите камень, ножницы или бумага");
handValue = handValue.trim();
handValue = handValue.toLowerCase();
if ((handValue === 'камень') || (handValue === 'ножницы') || (handValue === 'бумага')) {
    if (handValue === 'камень') {
        handValue = 1;
    }
    if (handValue === 'ножницы') {

        handValue = 2;
    }
    if (handValue === 'бумага') {

        handValue = 3;
    }
    randHand = Math.floor(1 + Math.random() * (3 + 1 - 1));
    if (((handValue === 1) && (randHand === 2)) ||
        ((handValue === 2) && (randHand === 3)) ||
        ((handValue === 3) && (randHand === 1))) {
        alert(`Поздравляем вы выиграли!!! У вас ${hands[handValue - 1]} у компьютера ${hands[randHand - 1]}`);
    } else if (((handValue === 1) && (randHand === 1)) ||
        ((handValue === 2) && (randHand === 2)) ||
        ((handValue === 3) && (randHand === 3))) {
        alert(`Ничья!!! У вас ${hands[handValue - 1]} у компьютера ${hands[randHand - 1]}`);
    } else {
        alert(`Вы проиграли!!! У вас ${hands[handValue - 1]} у компьютера ${hands[randHand - 1]}`);
    }
}
