console.clear();

const Fname='John'
const lastName='Lark'

function getFullName(firstName, lastName){
    return '${firstName} ${lastName}';

}

const mGreetings = 'Hello ${getFullName'
    (firstName, lastName) +100};
const mGreetings = 'Hello ${name}';
console.log(mGreetings);

//rgba(red, green, blue, aplha)

let red= 200;
let green=211;
let blue=231;
let aplha=0.8;

const rgbaExp='rgba(${red}, ${green}, ${blue}, ${aplha})';

console.log(rgbaExp);