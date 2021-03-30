console.log('We are in the Arry.js and lets discuss about arrays');

let marks = [32,45,55,44,33,32];
const fruits = ['orangge', 'Apple', 'Pineapple'];
const mixed = ['str', 323, [2,5]];

const arr = new Array(23,34,45, 'orange');

console.log(arr);
console.log(mixed);
console.log(fruits[1]);

console.log(arr.length);
console.log(Array.isArray('dftf'));
arr[0] = 'harry';

let arrelement = arr[0];
//console.log('element :', arrelement);
//console.log(arr);

let value = marks.indexOf(34);
//console.log(value);

// Mutating or Modifying arrays

//marks.push(444);
//marks.unshift(1000);

//marks.pop()
//marks.shift()

//marks.splice(2, 5);
//marks.reverse()

let marks2 = [1,2,3,5,67,7]
marks = marks.concat(marks2);
//console.log(marks);


let myobj = {

    'First name': 'mayank',
    channel: 'codewithHarry',
    isActive: true,
    marks: [1,2,3]
}

console.log(myobj)

console.log(myobj['First name'])
//console.log(myobj.isActive)
