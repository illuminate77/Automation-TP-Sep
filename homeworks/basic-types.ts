//let vs const
let num: number = 5;
num = 10;
num = 15;
//we can rewrite LET variables

const welcomeMssg: string = "WELCOME!";
//welcomeMssg = "Welcome, Peter!";
//Cannot assign to 'welcomeMssg' because it is a constant.
//We can assign value once, and never re-write it again.

//string
let message: string = "Hello, Peter!";

let messageLength: number = message.length;
console.log(messageLength);

//string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}.`;
console.log(welcomeMessageDetails);

//numbers and number operations
let numOne: number = 17;
let numTwo: number = 27;

let addition: number = numOne + numTwo;
let subtraction: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let division: number = numOne / numTwo;

//boolean (true/false)
let areEqual: boolean = numOne === numTwo;
//console.log("areEqual", areEqual);
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;

//logical operators
let areEqualTo: boolean = numOne === 17 && numTwo === 27;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 27;

//conditions

//ternary operator
//"hello" === "hello" ? "true result" : "false result"
let isPositiveNum: string = numOne > 0 
    ? `The number ${numOne} is positive`
    : `The number ${numOne} is negative`;

// ifelse statements
//basic ifelse practices and logic