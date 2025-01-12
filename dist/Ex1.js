"use strict";
class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
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
    getGender() {
        return this.gender;
    }
    toString() {
        return `Author[name=${this.name}, email=${this.email}, gender=${this.gender}]`;
    }
}
class Book {
    constructor(name, authors, price, qty = 0) {
        this.qty = 0;
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
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
        let authorDetails = this.authors
            .map((author) => author.toString())
            .join(", ");
        return `Book[name=${this.name}, authors={${authorDetails}}, price=${this.price}, qty=${this.qty}]`;
    }
    getAuthorNames() {
        return this.authors.map((author) => author.getName()).join(", ");
    }
}
module.exports = { Author, Book };
