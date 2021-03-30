console.log('This is tutorial If-Else');

const age = 185;
const doesDrive = true;

/*if(age==20){
    console.log('Age is 20');
}

 if(age !== 65){
    console.log('Age is not 65');
}
else{
    console.log('Age is not equal');
}

if(typeof vari !== 'undefine'){
    console.log('Vari is defined');
}

else{
    console.log('vari is not defined');
} */

//if (doesDrive && age>18){
    //if (doesDrive || age>18){
    //console.log("you can drive");
//}

//else{
   // console.log("you can't drive");
//}


//ternari operature
//console.log( age==45? "Age is 45" : 'Age is not 45');

switch(age){
    case 18:
        console.log("You are 18");
        break;
        case 25:
            console.log("You are 25");
            break;
         case 28:
            console.log("You are 28");
            break;
        case 38:
            console.log("You are 39");
            break;
    default:
        case 18:
            console.log("you are 18");
        break;
}