// object declaration syntax
const car = {
    type: "Hatchback",
    brand: "Alfa Romeo",
    model: "147",
    power: 116
};

//interface car object
interface Car {
    type: string;
    brand: string;
    model: string;
    power: number;
};

// object with method and array
const person = {
    name: "Zdravko",
    lastName: "Yankov",
    age: 27,
    address: "bul. Hristo Botev 49",
    hobbies: ["working out", "swimming", "gaming", "hiking"],
    greeting: function () {
        return 'Hello! My name is Zdravko.';
    },
};
//console.log(person);
//console.log(person.name);//logging just one property of the object

//properties access
person.name;
person.age;
person["address"];//using [] adds reusable / dynamic keys, example on row 27

//accessing function within an object (accessing them as a method)
person.greeting();//like you would call any other function, adding ()

//properties redeclaration
//declaring with const lets us change values (zdravko -> ivan) but we can't change keys (can't add for example more name fields)
person.age = 28;//27 becomes 28 in the object at the top
console.log(person);

//object typization
const person2: {name: string, lastName: string, age: number, address: string} = {
    name: "Elena",
    lastName: "Yankova",
    age: 31,
    address: "Plovdiv",
};

//interfaces - ALWAYS declare with capital (example: Person and not person)
interface Person3 {
    name: string; //different than just objects, we don't use , but we use ; after each
    lastName: string;
    age: number;
    address: string;
    hobbies: string[];//this is how we assign hobbies array type!
    greeting: () => string;//this is how we assign greeting function type!
    //greeting(): string; - another way of assigning function type!
};
//the order of properties in interface doesn't functionally matter (last name can go first, before name)

const person3: Person3 = {//we assign person3 object the Person3 interface
    name: "Boris",
    lastName: "Ivanov",
    age: 33,
    address: "bul. Hristo Botev 50",
    hobbies: ["working out", "drinking beer", "gaming", "hiking"],
    greeting: function () {
        return 'Hello! My name is Boris.';
    },
};

//interfaces - optional parameters, read only and string literals
interface User {
    name: string;
    readonly email: string;//readonly parameter can be accessed but never changed
    role: "user" | "superuser" | "admin" | "superadmin";//string literal, it can literally be just one of those values
    job?: string;//if we don't make it optional, error will be thrown
    password?: string | number;
};

const user: User = {
    name: "Tom",
    email: "tom@mail.com",
    role: "admin",
    job: "QA",
};
user.password = 21312514;
//we can declare password to the object as long as the interface has it within it's parameters, as it is optional, so we do it later

//combined interfaces
interface UserPermissions extends User {
    permissions: string;
};

const user2: UserPermissions = {
    name: "Tom",
    email: "tom@mail.com",
    role: "admin",
    job: "QA",
    permissions: "denied",
};