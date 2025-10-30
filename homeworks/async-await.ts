//basic async operation
//console.log('Start');

setTimeout(() => {
    console.log('Async operation');
}, 1000);

//console.log('End');

//multiple async operations

function setTimeouts() {
    setTimeout(() => {
        console.log('3 second delay');
    }, 3000);
    
    setTimeout(() => {
        console.log("1 second delay");
    }, 1000);

    setTimeout(() => {
        console.log("2 second delay");
    }, 2000);
};

//setTimeouts();

//async await syntax
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function demo() {
    await delay(2000);
    console.log("2 second delay")

    await delay(3000);
    console.log("3 second delay")

    await delay(1000);
    console.log("1 second delay")
}
//demo();

//get product data from fakestore

interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

async function getData() {
    const response = await fetch ("https://fakestoreapi.com/products/1");
    const data: Product = await response.json();
    console.log(`Title: ${data.title}`);
    console.log(`Price: ${data.price}`);
    console.log(`Category: ${data.category}`);
    //can also do return data;
}
//getData();

try {
    const jsonData = JSON.parse('{"valid": true}')
    console.log(jsonData);
} catch (err) {
    console.error(err);
} finally {
    console.log("JSON parser ready");
}

// try/catch/finally exercise
function divideNumbers (numOne: number, numTwo: number) {
    try {
        if (numTwo === 0) {
            throw new Error("Cannot divide by zero!");
        } else {
             const result: number = numOne / numTwo;
             console.log(`Result is ${result}`);
        }
    } catch (err: unknown) {
        console.log(`${err}`);
    } finally {
        console.log("Operation finished");
    }
};

divideNumbers(20, 0);

async function getData1(): Promise<void> {
    try {
        const response = await fetch("https://fakestoeapi.com/products/1");
        const data: Product = await response.json();
        console.log(data);
    } catch (error: unknown) {
        console.error(error);
    } finally {
        console.log('Operation completed');
    }
};
getData1();