"use strict";
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return "Author [name = " + this.name + "email : " + this.email + "]";
    }
}
class Book {
    constructor(name, auther, price, qty = 0) {
        this.qty = 0;
        this.name = name;
        this.author = author;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    setAuthors() {
        return this.author;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        let details = "Book [name = " + this.name + "auther={ ";
        for (let i = 0; i <= this.author.length; i++) {
            details += this.author[i].toString() + ",";
        }
        return details;
    }
    grtAuthernames() {
        let authorNames = "";
        for (let i = 0; i <= this.author.length; i++) {
            authorNames += this.author[i].getName() + ",";
        }
        return authorNames;
    }
}
module.exports = { Author, Book };
