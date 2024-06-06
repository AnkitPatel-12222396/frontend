let firstNum =5;
let secondNum = 2;


//This is a normal program which is inefficient if we have to use it  multiple times
// if(num1>num2){
// console.log(num1+" is greater than "+num2);
// }
// else if(num1==num2){
// console.log(num1+" is equal to "+num2);
// }
// else{
// console.log(num2+" is greater than "+num1);
// }

//function with parameters
function compare(firstNum,secondNum){
    if(firstNum>secondNum){
        console.log(firstNum+" is greater than "+secondNum);
        }
    else if(firstNum==secondNum){
        console.log(firstNum+" is equal to "+secondNum);
        }
    else{
        console.log(secondNum+" is greater than "+firstNum);
        }
}
compare(10,3)

//function without parameter
function print(){
    console.log("This is js code");
}
print()

//function called by another variable
const add = function addNum(a,b){
    return a+b;
}
const result = add(3,5)
console.log(result)
// addNum(6,8)  //this gives error as addNum not found

//anonymous function
const substract = function(a,b){
    return a-b;
}
const result1 = substract(5,3)
console.log(result1)

//function called by an object
const person = {
    firstName : "Ankit",
    lastName : "Patel",
    print:function(){console.log("I am in object person")}

};
person.print()
