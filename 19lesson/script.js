/**
 * Created by Anna on 06.06.2016.
 */
var student = "Anna";

alert( student );

student = "Kurovska";

alert ( student );

var name = prompt ("Введите ваше имя:");
alert("Добро пожаловать " + name + " ! ");

if (confirm("Вы и правда хотите загрузить эту страницу?")) {
    alert("Вы загрузили страницу!")
} else {
    alert("Вы отменили загрузку страницы")
}


var r = '9' + 0;
alert (r);

var a = 9 + '0';
alert (a);

var d = 4 + 9;
alert (d);

var b = null + 7;
alert (b);

var n = '6' + null;
alert (n);

console.log(+"9" + 9);

alert( 2/3 + 1 + 1/3 ); // ==2 false


var obj = {},
    w = 0;

obj.prop = 9;
w = obj.prop;
delete obj.prop;

console.log(obj.prop, w); // undefined 9