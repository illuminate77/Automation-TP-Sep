type Employee = string;
type EmployeeId = number;
type EmployeePosition = string;
type httpRequest = "GET" | "POST" | "PUT" | "DELETE";

//type Status = "active" | "inactive" | "banned";
type Active = 'active';
type Inactive = 'inactive';

type Result = string | number | null;

let data: Result = 'Test';

let responseData: Result = 20;

let printSum: Result = 50;

//type alias with string literals

type PaymentMethod = "cash" | "card" | "crypto";

function paymentDetails(amount: number, method: PaymentMethod) {
    console.log(`Payment ${amount} by ${method}`);
}

paymentDetails(20, "card");

//type alias interface
type ID = string | number;
type Status = "Open" | "In Progress" | "Done";
type Message = string | number;

interface Ticket {
    id: ID;
    title: string;
    status: Status;
}

interface Email {
    id: ID;
    message: string;
}

const email: Email = {//INTERFACE EMAIL IS ASSIGNED TO OBJECT EMAIL
    id: 10,
    message: "Hi"
}

const ticket = {// INTERFACE TICKET EXISTS, BUT IT'S NOT ASSIGNED, SO THEY ARE NOT CONNECTED
    id: 1,
    title: 'Send email',
    status: 'Done',
};

