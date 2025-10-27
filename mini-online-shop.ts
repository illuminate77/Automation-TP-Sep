// We are going to build a small TypeScript program that describes a mini online shop. The goal is to represent a customer, their shopping cart, and calculate the total price. 
 
// Steps 
// 1.Create an interface Product with the following fields: 
// name: string  
// price: number  
// category: "food" | "clothes" | "electronics" 
// 2.Create a type Category with the possible categories (food, clothes, electronics) 
// 3.Create an interface Customer with the following fields: 
// name: string   
// email: string 
// cart: Product[] — an array containing the products in the customer’s cart 
// 4. Create two example products (e.g., an apple and a T-shirt). 
// 5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product {
    name: string;
    price: number;
    category: Category;
}

interface Customer {
    name: string;
    email: string;
    cart: Product[];
}

const apple: Product = {name: "Apple", price: 2, category: "food"};
const tShirt: Product = {name: "T-shirt", price: 20, category: "clothes"};
const products: Product[] = [apple, tShirt];//assigning the Product type as an array to the array of products
//add more products for homework especially for electronics

const customer: Customer = {name: "Zdravko", email: "zdravko@email.com", cart: products};
//add second customer for homework, for cart pass a custom array of products, not the products array itself

//add function displayCart - display cart customer name and products
//add function filterByCategory - accepts products as array, and filters by category
//add function calculateTotalPrice - receive customer data and combine all products price
//customer.cart[0].price -- hint
//customer.cart[1].price
//total = sum of the above

export {};//makes the file a separate module