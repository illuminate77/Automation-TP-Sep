//homework task #1
const names: string[] = ["Ivan", "Peshko", "Georgi", "Zdravko"];
const fname: string = names[Math.floor(Math.random() * names.length)]!;
const lname: string = "Yankov";
const age: number = 27;

console.log(`Hello! I am ${fname} ${lname}, ${age} years old.`)

//homework task #2
let numOne: number = Math.floor(Math.random() * 50) + 1;
let numTwo: number = Math.floor(Math.random() * 50) + 1;
const addition: number = numOne + numTwo;
const subtraction: number = numOne - numTwo;

console.log(addition);

//addition to task #2 for exercise purposes
function multiply(numOne: number, numTwo: number) {
    let result = numOne * numTwo;

    if(result > 150) {
        console.log('Congrats, you win!');
    }else{
        console.log('Sorry, try again!');
    };

    return result;
};

const result: number = multiply(numOne, numTwo);

if(result > 450) {
    console.log(`Jackpot! We have a winner by the name of ${fname}! with a result of ${result} points!`);
};

//homework task #3
let numThree: number = Math.floor(Math.random() * 20) + 1;
let isWithinRange: boolean = numThree >= 5 && numThree <= 17;

console.log(`Is ${numThree} between 5 and 17? - ${isWithinRange}`)

//checking boolean usage in if statement
if(isWithinRange) {
    console.log('We have a correct value.')
};