// 2. Создайте переменную num и присвойте ей значение 10. Выведите значение этой переменной с помощью console.log()
let num = 10;
console.log(num);
// 3. Создайте переменные first = 5 и second = 10. Выведите в console.log() их сумму, разность, произведение и частность (деление)
let first = 5;
let second = 10;
console.log('Сумма first и second = ' + (first + second));
console.log('Разность first и second = ' + (first - second));
console.log('Произведение first и second = ' + (first * second));
console.log('Частность first и second = ' + (first / second));
// 4. Создайте переменные a = 3 и b = 10, их сумму присвойте в переменную result
let a = 3;
let b = 10;
result = a + b;
// 5. Создайте переменную bar = 20 и qwerty = 5. В переменную res присвойте разность bar - qwerty и отнемите 10.
let bar = 20;
let qwerty = 5;
res = bar - qwerty - 10;
// В переменную end присвойте разность значения res и переменной qwerty
let end = res - qwerty;
// 6. Создайте переменную str и присвойте ей значение Hello, Palmo. Результат выведите в alert()
let str = 'Hello, Palmo';
alert(str);
// 7. Создайте переменную name с вашим имененем и age с возрастом. В alert() выведите результат Я (имя), мне (возраст). (значения подставить из переменных)
let name = 'Виталик';
let age = 28;
alert('Я '+ name + ', мне ' + age + '.');
alert(`Я ${name}, мне ${age}.`);
// 8. Напишите скрипт, который считает количество секунд в часе, сутках и месяце. В console.log() выведите результат
let numberSecondsHour = 60 * 60;
numberSecondsDay = numberSecondsHour * 24;
numberSecondsMonth = numberSecondsHour * 31;
console.log(`В часе ${numberSecondsHour} секунд`);
console.log('В сутках ' + numberSecondsDay + ' секунд');
console.log('В месяце ' + numberSecondsMonth + ' секунд');
// 9. Создайте переменную с числом и возведите в квадрат
let c = 5;
squareNumber = Math.pow(c, 2);
// 10. Создайте переменную d и присвойте ей значение 8. В переменную n поместите квадрат значения переменной d, а в переменную x - куб значения переменной d
let d = 8;
n = Math.pow(d, 2);
x = Math.pow(d, 3);
//Создайте страницу, которая спрашивает имя у пользователя и выводит его.
let userName = prompt('Введите имя пользователя');
document.getElementById('user-name').innerHTML = userName;
//Создайте любой вопрос и выведите результат через функцию alert
let userAge= prompt('Сколько вам лет');
alert(`Вам ${userAge} лет`);
    // Преобразовать строку “12345” в число.
let str2 = "12345";
str2Number = Number(str2);
console.log(typeof str2Number);
    // Преобразовать значение true в строку.
let request = true;
requestString = String(request);
console.log(typeof requestString);
    // Преобразовать значение null в логический тип.
let color = null;
colorBoolean = Boolean(color);
console.log(typeof colorBoolean);
    // Преобразовать пустую строку в логический тип.
let emptiness = "";
emptinessBoolean = Boolean(emptiness);
console.log(typeof emptinessBoolean);