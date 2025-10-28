//forEach method
const nums: number[] = [10, 20, 30, 40];

nums.forEach((n: number, index: number) => {
    console.log(`Index ${index}: value ${n}.`)
});

//sum nums
let sum: number = 0;

nums.forEach((num: number) => {
    sum = sum + num;
    //short method sum += num;
});
console.log("Sum of nums", sum);

//active users example
interface User {
    id: number,
    name: string,
    isActive: boolean,
}

const users: User[] = [
    {id: 1, name: 'Boris', isActive: false},
    {id: 2, name: 'Zdravko', isActive: true},
    {id: 3, name: 'Maria', isActive: true}
]

let activeIds: number[] = [];

users.forEach((user: User) => {
    if (user.isActive) {
        activeIds.push(user.id);
    }
})

console.log('activeIds', activeIds);