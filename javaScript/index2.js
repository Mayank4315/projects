//Data Type in java scripts

//primitive data type

//string data type
var name= "harry";
age=25;
console.log("my string is " + name+age);

//number

let marks=25;
console.log("Data type is" + (typeof marks));

//Boolean
let isDrive = true;
console.log("Data type is " + (typeof isDrive));

//null
let nullVar= null;
console.log("Data type is" + (typeof nullVar));

//undefined

let undef= undefined;
console.log("Data type is " + (typeof undef));

//Refrence data type

//arrays 
myarr=[1,2,3,3,4,4, false, "string"];
console.log("data type is " + (typeof myarr));

//object Literals

let stmarks ={
    harry: 89,
    shubham: 35,
    'rohan Das': 68
}
console.log(typeof stmarks);

//function

function findName(){

}
console.log(typeof findName);

//Date
let date=new Date();
console.log(typeof date);
