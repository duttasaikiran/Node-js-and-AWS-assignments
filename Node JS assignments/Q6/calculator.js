function sum(a, b){
    console.log(`The sum of ${a} and ${b} is ${a+b}`);
}

function multiplication(a, b){
    console.log(`The multiplication of ${a} and ${b} is ${a*b}`);
}

function Substraction(a, b){
    console.log(`The substraction of ${a} and ${b} is ${a-b}`);
}

function divison(a, b){
    console.log(`The divison of ${a} and ${b} is ${a/b}`);
}

module.exports.sum = sum;
module.exports.multiplication = multiplication;
module.exports.Substraction = Substraction;
module.exports.divison = divison;
