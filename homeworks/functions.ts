//Functions
function displayPersonalData(name: string, age: number) {
    return `${name} is ${age} years old.`
};

//we pass data to the function, in the order of the variables (string first, number second)
//console.log(displayPersonalData("Zdravko", 27));

//Zdravko 27 is saved, however we can reuse the function and rewrite it to new values
const personalData: string = displayPersonalData("Peter", 20);
//console.log(personalData);

function divideNums(numOne: number, numTwo: number): number {
    return numOne / numTwo;
}

divideNums(10, 5);
divideNums(50, 5);
divideNums(75, 25);

//arrow functions
const sumNums = (a: number, b: number) => a + b;
sumNums(3, 2);

//hoisting in JS (google it) - reorders and takes var + functions at the top

//optional parameter functions
//optional parameters are always the last one to be listed in the function (see age is behind name)
function greeting(name: string, age? : number) {
    if (age) {
        return `${name} is ${age} years old.`; //if we add return midway through, we end the entire functionality from being ran
    }
    return `Hi, my name is ${name}.`;
}

//if we add return to the function, we call the result using console.log (console.log("Zdravko", 27))
//if we have console log INSIDE the function, we can just run it like this ↓
console.log(greeting("Zdravko", 27));
console.log(greeting("Zdravko"));

//default parameters
function substractNums(numOne: number = 10, numTwo: number = 5) {
    console.log(numOne - numTwo);
}
substractNums(50); //10 becomes 50, 5 unchanged
substractNums(50, 30); //both changed

//functions with parameters of union type
function printId(id: string | number) {
    console.log(`Id - ${id} is type of ${typeof id}`)
};

printId("#10");
printId(10);
