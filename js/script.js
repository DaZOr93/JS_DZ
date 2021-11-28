// 1. Создайте функцию, которая проверяет является ли значние числом. Функция должна возвращать Boolean.
function checkNumber(a) {
    return isFinite(a);
}

console.log(checkNumber(' 1d'));
// 2. Создайте фукнцию, которая принимает 3 числа. Возвращать должна среднее из этих 3х чисел. (Не забудьте добавить проверки на
// то, что аргументы не пустые и являются числами).
function mean(number1, number2, number3) {
    if (Emptiness(number1) || (!checkNumber(number1))) {
        return "Первый аргумент пустой или не число"
    }
    if (Emptiness(number2) || (!checkNumber(number2))) {
        return "Второй аргумент пустой или не число"
    }
    if (Emptiness(number3) || (!checkNumber(number3))) {
        return "Третий аргумент пустой или не число"
    }
    const sum = number1 + number2 + number3;
    const max = Math.max(number1, number2, number3);
    const min = Math.min(number1, number2, number3);
    return sum - max - min;
}

function Emptiness(str) {
    return ((str === '') || (str === ' '));
}

console.log(mean(6, 5, 1));

// 3. Создайте фукнцию, которая принимает объект и проверяет есть ли в нем свойство 'name'. Вернуть Boolean тип.
function findName(obj) {
    return "name" in obj;
}

let user = {
    name: 'Viktor',
    username: 'Admin',
    age: 25,
    city: "Kramatorsk"
};
console.log(findName(user));

// 4. Создайте функцию, которая принимает объект со свойствами name и username и возвращает строку в формате Имя Фамилия.
function getFullName(obj) {
    return `${obj.name} ${obj.username}`
}

console.log(getFullName(user));
// 5. Создайте функцию, которая принимает объекте типа {name1: 200, name2: 500, name3: 400}. Функция должна вернуть сумму всех
// свойств объекта.
function sumObjectProperties(obj) {
    let sum = 0;
    for (let key in obj) {
        sum = obj[key] + sum;
    }
    return sum;
}

console.log(sumObjectProperties({name1: 200, name2: 500, name3: 400}));
// 6. Создайте функцию, которая принимает объект. Все ЧИСЛОВЫЕ свойства объекта нужно поделить на 2,
//     если получилось НЕ целое число - округлить его по математическим правилами, а текстовые поменять на строку
// Hello, Palmo. Если свойство не числовое или не текстовое - удалить его из объекта. Функция должна вернуть переделанный объект.
function editObject(obj) {
    for (let key in obj) {
        if (!Emptiness(obj[key]) && (checkNumber(obj[key]))) {
            obj[key] = Math.round(obj[key] / 2);
        } else if (typeof (obj[key]) === "string") {
            obj[key] = "Hello, Palmo.";
        } else {
            delete obj[key];
        }

    }
    return obj;
}

console.log(editObject({name1: ['s', 1], name2: 9, name3: 's00', name5: '400'}));
// 7. Создайте игру "Викторина". Опираясь на ваши знания по JS, создайте игру, которая поочередно задаст пользователю 10 вопросов.
//     За каждый правильный ответ начисляйте пользователю 1 балл. После ответа на все вопросы выведите сколько баллов заработал пользователь.
function quiz(obj) {
    let quizPoints = 0;
    for (let key in obj) {
        if (confirm(obj[key].question) === obj[key].answer) {
            quizPoints++;
        }
    }
    alert(`Вы заработали ${quizPoints} баллов!`)
    return quizPoints;
}

const QUIZ_QUESTION = {
    question1: {
        question: "Правда ли, что черепахи плачут?",
        answer: true,
    },
    question2: {
        question: "Правда ли, что сказку «Цветик-семицветик» написал Пушкин?",
        answer: false,
    },
    question3: {
        question: "Правда ли, что самые первые машины были двухколесными? ",
        answer: false,
    },
    question4: {
        question: "Правда ли, что крокодилы могут притворяться бревнами, спасаясь от врагов?",
        answer: false,
    },
    question5: {
        question: "Правда ли, что Австралия – это самый большой материк?",
        answer: false,
    },
    question6: {
        question: "Правда ли, что блины выпекают из ржаной муки? ",
        answer: false,
    },
    question7: {
        question: "Правда ли, что Марс ближайшая к Солнцу планета?",
        answer: false,
    },
    question8: {
        question: "Правда ли, что на Земле больше соленой воды, чем пресной?",
        answer: true,
    },
    question9: {
        question: "Правда ли, что шакал является родственником собаки?",
        answer: true,
    },
    question10: {
        question: "Правда ли, что для производства стекла используют глину?",
        answer: false,
    },
}
quiz(QUIZ_QUESTION);