//arrays declaration
let numsArray: number[] = [1, 2, 3, 4];
let stringsArray: string[] = ["Gosho", "Pesho", "Ivan", "Zdravko"];
let combinedArray: (string | number)[] = [1, "Pesho", 2, "Ivan"];

//access element by index
stringsArray[0];
stringsArray[1];
combinedArray[2];

console.log(stringsArray[0]);
console.log(stringsArray[1]);

//access array length
numsArray.length;
console.log(`The amount of numbers is ${numsArray.length}.`);

//map method
let multiplyNumsArray = numsArray.map((num: number) => num * 2);
//output is numsArray[2, 4, 6, 8]
let mapNames = stringsArray.map((currName): string => `My name is ${currName}`);
//console.log(mapNames);
let checkTypeOf = combinedArray.map((element: number | string) => {
    if(typeof element == "number") {
        return element + 5;
    } else {
        return `This is a string with the value of ${element}`
    }
});
console.log(checkTypeOf);