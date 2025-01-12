//______________________________________________________EX1________________________________________________________________________//
const { Author, Book } = require("./Ex1");

console.log("###########################EX1###########################");

const author1 = new Author("Sappawat Padtong", "tame2543@gmail.com", "M");
const author2 = new Author("Nabthong Suupmha", "nabthong@gmail.com", "F");

const book = new Book("TypeScript Basics", [author1, author2], 29.99, 10);

console.log(author1.toString());
console.log(author2.toString());
console.log(book.toString());
console.log("Author Names: " + book.getAuthorNames());


//______________________________________________________EX2________________________________________________________________________//

const { Customer, Invoice } = require("./Ex2");

console.log("################# Customer & Invoice Example #################");


const customer = new Customer(1, "John Doe", 15);


const invoice = new Invoice(1001, customer, 200.0);


console.log(customer.toString());


console.log(invoice.toString()); 

console.log("Amount after discount: " + invoice.getAmountAfterDiscount());

//______________________________________________________EX3________________________________________________________________________//

const {Person, Staff , Student} = require("./Ex3");

console.log("###########################EX3###########################")

const person = new Person("John Doe", "123 Main St");
console.log(person.toString());


const student = new Student("Jane Smith", "456 University Ave", "Computer Science", 2023, 15000);
console.log(student.toString()); 



const staff = new Staff("Emily Johnson", "789 High School Rd", "Greenwood High", 50000);
console.log(staff.toString());