/*задание 1*/

for (var i=2; i<=10; i++){
    for(var j=2; j<=i; j++){
        if (i%j == 0) break;
    }
    if(j==i) console.log(i);
}

/*задание 2*/

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return; 
    }

    classes.push(cls); // добавить

    obj.className = classes.join(' '); 
}

var obj = {
    className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className)

/*задание 3*/
function removeClass(obj, cls) {
    var list = obj.className.split(' ');
    for(var i = 0; i < list.length; i++) {
        if (list[i] == cls) {
            list.splice(i, 1);
        }
    }
    if (obj.className.length == 0 ) {
        obj.className = list.join('');
    } else {
        obj.className = list.join(' ');
    }
}

/*задание 4*/
var mas = [];
var a;

while (a === undefined) {
    a = prompt('vvod', 5);
    if (a !== null && a !== '' && !isNaN(a)) {
        mas.push(Number(a));
        a = undefined;
    }
}

for (var c = 0, i = 0; i < mas.length; i++) {
    c += mas[i];
}

alert(c);

/*задание 5*/
function goFun(){
    var y;
    var x = prompt('Введите положительное число', '');
    if (x > 0) {
        return y = 5*x*x*x-5*x*(x*x+4);
    }
    else {
        return alert( 'Только положительные числа > 0');
    }
}
alert( 'Ответ составит: ' + (goFun()) );

/*задание 6*/

function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757

/*задание 7*/

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...';
    }

    return str;
}

alert( truncate("Напишите функцию, которая принимает на вход строку", 20) );
alert( truncate("Возвращает ее", 20) );

/*задание 8*/

var taskCompleted = {
    "Anna": 29,
    "Serg": 35,
    "Elena": 1,
    "Anton": 99
};

var max = 0;
var maxName = "";
for (var name in taskCompleted) {
    if (max < taskCompleted[name]) {
        max = taskCompleted[name];
        maxName = name;
    }
}

alert( maxName);