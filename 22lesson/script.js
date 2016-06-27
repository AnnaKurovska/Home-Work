/*задание 1*/
var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
arr.reverse();
delete arr[0];
delete arr[6];
delete arr[5];
var str = arr.join(' ');
alert( str );

/*задание 2*/
function isPal(string){
    var pal = ("Anna", "А роза упала на лапу Азора", "Вася", "12321", "123212");
    var isSplit=pal.split("");
    isSplit.reverse();
    var c=isSplit.join("");
    if (pal===c) {
        alert("true");
    } else {
        alert("false");
    }
};

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

/*задание 3*/
function aclean(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

        obj[sorted] = arr[i];

    var result = [];

    for (var key in obj) result.push(obj[key]);

    return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); //ЗОВ, гробик, сектор


/*задание 4*/
    var arr = ['rrrA', 'toboR', 'ekiL', 'dooG', 'esoR'];
    var str = arr.join(' , ');
    str.split('');
    str.reverse(); //"Rose ; Good ; Like ; Robot ; Arrr"


/*задание 5*/
    /*10.1*/
    var sum=0;
    var i=1;
    while (i<=100){
        sum+=i;
        i=i+1;}
    alert(sum); //5050

/*10.2*/
    var sum=0;
    for(var i = 0; i<=100; i++)
        if(i%2==0)
            sum+=i;
    alert(sum); //2550

/*задание 6*/