/*задание 1*/

var name = prompt("Как ваше имя?");
function Person(name) {
    this.name = name;
    console.log(this.name);
}
Person(name);

/*задание 2*/
function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert( sumTo(1) );
alert( sumTo(2) );
alert( sumTo(3) );
alert( sumTo(4) );



/*задание 3*/
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

min(2, 5) //2
min(-3, 7) //-3
min(1, 1) //1




/*задание 4*/

var x = 5;
var y = 6;
var obj = {
    number: 9,
    cantDelete: y,
    getDouble: function (x) {
        var command = prompt("Input 'set' or 'get'")
        if (command == "set") {
            return x * 2
        } else if (command == "get") {
            return x * 3
        } else {
            return false
        }
    }
};

/*задание 5*/

function compareAge(personA, personB) {
    return personA.age - personB.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);

for(var i = 0; i < people.length; i++) {
    alert(people[i].name); // Вовочка Маша Вася
}

/*задание 6*/

function unique(arr) {
    var result = [];

    nextInput:
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            for (var j = 0; j < result.length; j++) {
                if (result[j] == str) continue nextInput;
            }
            result.push(str);
        }

    return result;
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()
