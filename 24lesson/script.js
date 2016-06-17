/*задание 1*/
function Persons(name, last_name, age) {
    Persons.count++;
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.canWalk = function () {
        if (this.age <= 90) {
            return true;
        } else {
            return false;
        }
    }
};

Persons.count=0;

Persons.showCount = function() {
    alert( this.count );
};

var woman = new Persons("Lili", "Smith", 25);
var man = new Persons("Joe", "Smith", 42);
var grandfather = new Persons("Rick", "Smith", 95);

Persons.showCount(); //3

woman.canWalk(); //true
man.canWalk(); //true
grandfather.canWalk(); //false

/*задание 2*/
function Car(canRide, wheels, model) {
    this.canRide = canRide;
    this.wheels = wheels;
    this.model = model;
};

Car.prototype.toString = function() {
   return "Это объект Bus! Он может ехать?" + " " + this.canRide + " " + "У него" + " " + this.wheels + " " + "колеса и у него модель" + " " + this.model
};

var honda = new Car("Может ехать.", 4, "honda");
alert(honda);

var bicycle = new Car("Может ехать.", 2, "аист");
alert(bicycle);

/*задание 3*/
var ladder = {
    step: 2,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().up().down().showStep(); //3


/*задание 4*/

function Runner() {
    this.steps = 0;
    this.step = function() {
        this.steps++;
    };
};

var runner1 = new Runner();
var runner2 = new Runner();

var t1 = setInterval(function() {
    runner1.step();
}, 15);

var t2 = setTimeout(function go() {
    runner2.step();
    t2 = setTimeout(go, 15);
}, 15);

setTimeout(function() {
    clearInterval(t1);
    clearTimeout(t2);
    alert( runner1.steps );
    alert( runner2.steps );
}, 5000);

/*задание 5*/
var re = /\d\d[-:]\d\d/g;
alert( "Завтрак в 09:00. Обед - в 21-30".match(re) ); // 09:00,21-30

/*задание 6*/
var reg = /\.{3,}/g;
alert( "Привет!... Как дела?.....".match(reg) ); // ..., .....

/*задание 7*/
var re = /#[a-f0-9]{6}\b/gi;

var str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2"

alert( str.match(re) );  // #121212,#AA00ef
