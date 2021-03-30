//Type conversion 

console.log('welcome to tuts');

let myVar;
myvar = String(34);
//console.log(myVar, (typeof myVar));


let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

/*let arr = String([1,2,3,4,5]);
console.log(arr, (typeof arr));

let arr = String([1,2,3,4,5]);
console.log(arr.length, (typeof arr)); */

let arr = ([1,2,3,4,5]);
//console.log(arr, (typeof arr));

/* let i =8;
console.log(i.toString());

let i= true;
console.log(i.toString()); */

let i = new Date();
//console.log(i.toString());

let stri = Number("335") ;
stri = Number("3265d62");
stri = Number(true);
stri = Number(false);
stri = Number([1,2,2,3,4,5]);
//console.log(stri, (typeof stri));

//let number = parseInt('34.21');

let number = parseFloat('34.21');
console.log(number.toFixed(5), (typeof number));    //toFixed is used to get number after decimal

//console.log(number, (typeof number));


//Type coerction

//let mystr = "858";

let mystr = Number("655");
let mynum = 666;

console.log(mystr + mynum);