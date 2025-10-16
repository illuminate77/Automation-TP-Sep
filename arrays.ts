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
//console.log(checkTypeOf);

//filter method - filters using a specific requirement
let positiveNums: number[] = [2, 3, 4, 5, 6];
positiveNums.filter((num: number) => num > 2);

//sort method - sorts the array asc or desc
const months: string[] = ['March', 'Jan', 'Feb', 'Dec'];
const arr2: number[] = [19, 3, 99, 29, 107];
let sortedArr2 = arr2.sort((a: number, b: number) => a - b);
//a-b is for ascending while b-a is for descending
console.log(sortedArr2);

//push method - adds one element at the end of array
sortedArr2.push(200);

//pop method - removes last index element
sortedArr2.pop();

//shift method - removes first index element
sortedArr2.shift();

//method unshift - adds element to the first index
sortedArr2.unshift();

