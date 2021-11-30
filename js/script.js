// 1.Напишите функцию upFirst(str), которая возвращает строку str с заглавным первым символом,
//     остальные символы должны быть в нижнем регистре (пример: upFirst("иванов"),
//     должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")

function upFirst(str) {
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.substr(1);
    return str
}

console.log(upFirst('dVAN'));
// 2. Напишите функцию truncate(str, maxlength), которая проверяет длину строки str,
//     и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.substr(0, maxlength - 2) + '...'
    }
    return str;
}

console.log(truncate('123456', 5));
// 3. Напишите функцию getShortName(fullName), которая преобразует полное ФИО fullName в краткое.
//     Например getShortName("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."
function getShortName(fullName) {
    fullName = fullName.split(' ');
    return `${upFirst(fullName[0])} ${fullName[1][0].toUpperCase()}. ${fullName[2][0].toUpperCase()}.`
}

console.log(getShortName('ivAnov iitaliy iikyo'));
// 4. Напишите функцию, которая принимает массив объектов.
//     Функция должна вернуть массив только с теми объектами, у которых есть свойство name
function isNameHere(arr) {
    let newArr = [];
    for (let value of arr) {
        if ("name" in value) {
            newArr.push(value);
        }
    }
    return newArr;
}

arr = [{name: 'aaa', mas: 1}, {name: 'a2a', mas: 2}, {nme: 'a3a', mas: 3}, {name: 'a4a', mas: 4}]
console.log(isNameHere(arr));

// 5. Напишите функцию, которая принимает два массива. Функция должна вернуть результат объединения этих массивов без дубликатов

function sumArr(arr1, arr2) {
    for (let value of arr2) {
        if (!arr1.includes(value)) {
            arr1.push(value)
        }
    }
    return arr1;
}

arr1 = [1, 2, 3, 4, 5]
arr2 = [5, 6, 7, 8]
console.log(sumArr(arr1, arr2));
// 6. Напишите функцию, которая преобразует строки snake_case в camelCase.
//     Например modifyString('super-user-name') // вернуть 'superUserName'
function modifyString(str) {
    str = str.split('-');
    str[1] = upFirst(str[1]);
    str[2] = upFirst(str[2]);
    str = str.join('');
    return str;
}

console.log(modifyString('super-user-name'));

// 7. Напишите функцию, которая принимает значение с математическим выражением и возвращает результат его решения.
//     Например: calc('5 + 10') // вернет 15
function calc(str) {
    if (str.indexOf('+') > -1) {
        str = str.split(' + ');
        return +str[0] + +str[1];
    }
    if (str.indexOf('-') > -1) {
        str = str.split(' - ');
        return +str[0] - +str[1];
    }
    if (str.indexOf('*') > -1) {
        str = str.split(' * ');
        return +str[0] * +str[1];
    }

    if (str.indexOf('/') > -1) {
        str = str.split(' / ');
        return +str[0] / +str[1];
    }

}

console.log(calc('5 + 10'));
console.log(calc('5 - 10'));
console.log(calc('5 / 10'));
console.log(calc('5 * 10'));
// 8. Напишите функцию, которая принимает объект с пользователями и возвращает массив имён.
//     Функция должна вернуть ['John', 'Marry', 'Poll']
const users = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'Marry',
        age: 22
    },
    {
        id: 3,
        name: 'Poll',
        age: 25
    },
]

function getName(arr) {
    let arrName = [];
    for (let key of arr) {
        arrName.push(key.name);
    }
    return arrName;
}

console.log(getName(users));
// 9. Напишите функцию, которая принимает массив. Каждый элемент массива, который является числом - умножить на 2,
// строки - преобразовать в массив, где каждый символ - отдельный элемент массива. Функция должна вернуть измененный объект
function editArr(arr) {
    let newArr = [];
    for (let key of arr) {
        if (isFinite(key)) {
            newArr.push(key / 2);
        }
        if (typeof (key) === 'string') {
            newArr.push(key.split(''));

        }
    }

    return newArr;
}

console.log(editArr([1, 4, 6, 8, "dsdsds"]));
// 10. Напишите функцию, которая проверяет строку на спам. Функция должна возвращать true, если в строке есть 2 одинаковых слова,
//     и false - если все слова уникальны.
function checkSpam(str) {
    str = str.split(' ');
    for (let value of str) {
        let results = str.filter(item => item.toLowerCase() === value.toLowerCase());
        if (results.length >= 2) {
            return true;
        }
    }
    return false;
}

console.log(checkSpam('Привет как  дела привет'))
// 11.Напишите функцию, которая проверяет строку на нецензурную лексику.
//     Создайте массив, который будет содержать слова, которые нельзя пропускать.
//     Функция должна принимать строку и проверять наличие в ней слов из массива, которые нужно пропускать.
//     Если в строке есть слово из массива - вернуть true, если нет - false.

function checkUncensored(str, arr) {
    str = str.split(' ');
    for (let value of arr) {
        let results = str.filter(item => item.toLowerCase() === value.toLowerCase());
        if (results.length > 0) {
            return true;
        }
    }
    return false;
}

console.log(checkUncensored('Привет как  дела привет', ["ты", "яблоко", "дела"]))
// 12. Напишите функцию, которая принимает массив. Функция должна вернуть предложение только из строковых значений массива.
//     Например:
// arrayToSentence(['Привет', 1, null, 'как', '{}', 'дела']) // вернуть Привет как дела
function arrayToSentence(arr) {
    arr = arr.filter(item => typeof (item) === "string");
    return arr.join(' ');
}

console.log(arrayToSentence(['Привет', 1, null, 'как', {}, 'дела']));
// 13. Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), который возвращает строку этих чисел в форме номера телефона.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx';

    for (number of numbers) {
        format = format.replace('x', number);
    }

    return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// 14. Напишите функцию, которая массив с пользователями и возвращает имя пользователя с наибольшей заработной платой. Например:
const users2 = [
    {
        id: 1,
        name: 'John',
        age: 20,
        salary: 1000
    },
    {
        id: 2,
        name: 'Marry',
        age: 22,
        salary: 1500
    },
    {
        id: 3,
        name: 'Poll',
        age: 25,
        salary: 1200
    },
]

function getHighestSalarty(arr) {
    let name;
    let maxSalary = 0;
    for (let key of arr) {
        if (maxSalary < key.salary) {
            name = key.name
            maxSalary = key.salary
        }
    }
    return name;
}

console.log(getHighestSalarty(users2))// должно вернуть 'Marry'


// 15. Напишите функцию, которая проверяет корректность строки.
//     Строка должна быть не менее 3х символов и не более 16ти символов, должна быть не пустая, не должна содержать числа.

function checkWithoutNumbers(str) {
    str = str.trim();
    if ((str.length >= 3) && (str.length <= 16)) {
        for (let char of str) {
            if ((char !== ' ') && (isFinite(char))) {
                return false
            }
        }
        return true;
    }
    return false;
}


console.log(checkWithoutNumbers('ewew2dd'))
// 16. Напишите функцию, которая проверяет пароль на корректность.
//     Пароль должен быть не менее 6ти символов, должен содержать хотя бы одну цифру и хотя бы одну заглавную букву
function checkPassword(str) {
    let digit = 0;
    let capitalLetter = 0;
    for (let char of str) {
        if ((char !== ' ') && (isFinite(char))) {
            digit++
        }
        if ((char !== ' ') && (!isFinite(char)) && (char === char.toUpperCase())) {
            capitalLetter++
        }
    }
    return (str.length >= 6) && (digit >= 1) && (capitalLetter >= 1);
}

console.log(checkPassword('aaas1A'))