//homework task #1
interface Person {
    name: string,
    lastName: string,
    age: number,
    email: string,
    phoneNumber: number
};

//homework task #2
interface PersonInfo extends Person {
    country?: string,
    greeting?(): string,
};

//homework task #3
const personOne: Person = {
    name: 'Zdravko',
    lastName: 'Yankov',
    age: 27,
    email: 'zdravko@email.com',
    phoneNumber: 935845
};

//homework task #4
const personTwo: PersonInfo = {
    name: 'Maria',
    lastName: 'Popova',
    age: 25,
    email: 'maria@email.com',
    phoneNumber: 935845,
    country: 'Bulgaria',
    greeting() {
        return `Hello, my name is ${this.name} ${this.lastName} from ${this.country}.`
    }
};

console.log(personTwo);
console.log(personTwo.greeting?.());