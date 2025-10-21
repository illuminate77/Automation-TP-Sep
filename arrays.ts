/*
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
*/

//homework task #1
let namesArray: string[] = ["Zdravko", "Ivan", "Georgi", "Petar"];
namesArray.push("Maria");
console.log(namesArray); //we log the updated version of the array

//homework task #2
let numbersArray: number[] = [20, 30, 40, 50, 60];
numbersArray.shift();
console.log(numbersArray);

//homework task #3
let dividedNumsArray = numbersArray.map((num: number) => num / 2); //note for self - map method is essentially an arrow function
console.log(dividedNumsArray);

//homework task #4
let hwNumbers: number[] = [3, 7, 1, 9, 12, 4];
let filteredNumbers = hwNumbers.filter((num: number) => num > 5);
console.log(filteredNumbers);


//homework task #5
let unsortedNumbers: number[] = [9, 3, 7, 2, 8, 5];
let sortedNumbers = unsortedNumbers.sort((num: number, num1: number) => num - num1);
console.log(sortedNumbers);
let sortedNumbersDesc = unsortedNumbers.sort((num: number, num1: number) => num1 - num);
console.log(sortedNumbersDesc);

//homework task #6
let unslicedFruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(unslicedFruits.slice(0, 3)); //this is for range (start / end index) -- important: end index is not included - 0, 3 means starts at apple ends at date!!
console.log(unslicedFruits.slice(0-3)); //this is for omitting values (returns all values/indexes except the ones specified)

//homework task #7
let unsplicedObjects: string[] =  ['car', 'bike', 'bus', 'train', 'boat'];
let splicedObjects = unsplicedObjects.splice(1, 2); //we remove bike and bus from the array
console.log(unsplicedObjects); //we log the remaining result after the operation
console.log(splicedObjects); //we can see what objects were removed
//important for task 7: in order to return the array after modification we log unsplicedObjects and not splicedObjects!!

//homework task #8
function findLargest(num1: number, num2: number, num3: number): number {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
};

console.log(`The largest numbers is ${findLargest(28, 18, 50)}`);
console.log(findLargest(20, 10, 5));
console.log(findLargest(20, 100, 50));

//homework task #9
function convertToCentimeters(inches: number): string {
    let centimeters: number = inches * 2.54;
    if (inches <= 1) {
        return `${inches} inch is equal to ${centimeters} centimeters.`;//making it gramatically correct, if we have 1 inch we can't say "are equal" and must use "is equal" instead
    } else {
        return `${inches} inches are equal to ${centimeters} centimeters.`;//works for any number above one inch, making it gramatically correct
    }
};
let result = convertToCentimeters(10);
console.log(result);

//homework task #10
//this solution checks if height is omitted and will accept 0 as a valid value for the height parameter
function calculateArea(width: number, height?: number) {
    if (height !== undefined) {
        let area = width * height;
        return area;
    } else {
        let area = width * width;
        return area;
    }
};
let resultArea = calculateArea(2, 0);
console.log(resultArea);

//this solution will only work if we have a truthy value (i.e. anything above 0, as 0 is false)
function calculateArea2(width: number, height?: number) {
    if (height) {
        let area = width * height;
        return area;
    } else {
        let area = width * width;
        return area;
    }
};
let resultArea2 = calculateArea2(2, 18);
console.log(resultArea2);