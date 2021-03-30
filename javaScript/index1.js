console.log('hellow worlds');

//variables in js

//var, let, const

var name='mayank';

var channnel;
var marks=133;
marks= 455;
channel='myank kashyap';
console.log(name,channel, marks)



//Rule for creating javascript variables

/*
1. cannot start with numbers
2. can start with letters, numbers, _ and $
3. Are case sensitive
*/

var city='Delhi';
console.log(city);

const ownerName='Mayank';
//ownerName='kashyap';  can not do this
console.log(ownerName);

const fruit='orange'; 


{
    let city='kolkata';
    city='Rampur';              //local variable we can not access
    console.log(city);
}

console.log(city);    //global variable that is the reason to print delhi first

const arr1 = [12,33, 45,2];
//arr1.puch(56);
console.log(arr1);

//Most common programming case type:
/*
1. camelCase
2. kebab-case
3. snake_case
4. Pascalcase
*/