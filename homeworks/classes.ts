//classes declaration
class Person {
    //name: string;
    //age: number;

    constructor(public name: string, public age: number) {// IF WE PUT PUBLIC HERE WE CAN COMMENT OUT THE DECLARATIONS ABOVE
        this.name = name;
        this.age = age;
    }

    introduction(): void {
        console.log(`Hi, I am ${this.name}, ${this.age} years old.`)
    }
};

const person1 = new Person ('Zdravko', 27);
person1.introduction(); //Hi, I am.... etc
person1.name;//accessing name
console.log(person1.name);
person1.age;//accessing age
person1.name = 'Peter';//can rewrite the name later, but if console log exists above this row, the prev value is print as well
console.log(person1.name);
//PROPERTIES ARE PUBLIC, CAN BE ACCESSED AND CHANGED

//readonly class modifier
class ReadonlyPersonData {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    intro(): void {
        console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
    }
}

const person2 = new ReadonlyPersonData ('Maria', 30);
person2.age;
person2.name;//we cannot reassign these, as they are readonly 

//private access modifier
class PrivatePersonData {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    private displaySecretMssg(): string {
        return "This is a private message, from a private method."
    }

    intro(): void {
        console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
    }
}

const person3 = new PrivatePersonData("David", 35);
//person3.name; --> results in: Property 'name' is private and only accessible within class 'PrivatePersonData'

//class inheritance
class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    intro(): void {
        console.log('Nice to meet you');
    }
}

class UserDetails extends User {
    constructor(name: string) {
        super(name);
    }

    showDetails(): void {
        console.log(`My name is ${this.name}`);
    }
}

const user1 = new UserDetails('Bobi');
console.log("<----->");
console.log(user1.name);
user1.showDetails();
user1.intro();

//protected class modifier

class ProtectedPerson {
    // protected name: string;
    // protected age: number;

    constructor(protected name: string, protected age: number) {
        this.name = name;
        this.age = age;
    }

    protected getProtectedData(): string {
        return `Protected name ${this.name} and protected age ${this.age}`;
    }
}

const protectedPerson = new ProtectedPerson('Protected Pesho', 22);
//protectedPerson.name; --> Property 'name' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
//protectedPerson.getProtectedData(); results in same error as above

class Student extends ProtectedPerson {
    private grade: number;

    constructor(name: string, age: number, grade: number){
        super(name, age);
        this.grade = grade;
    }

    studentIntro(): void {
        console.log(this.getProtectedData());
        console.log(`${this.name} is ${this.age} years old with grade ${this.grade}.`);
    }
}

const student = new Student('Vili', 20, 6);
student.studentIntro;
console.log('<---->');