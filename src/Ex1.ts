class Author {
    private name: string;
    private email: string;
    private gender: string;

    constructor(name: string, email: string, gender: string) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getGender(): string {
        return this.gender;
    }

    public toString(): string {
        return `Author[name=${this.name}, email=${this.email}, gender=${this.gender}]`;
    }
}

class Book {
    private name: string;
    private authors: Author[];
    private price: number;
    private qty: number = 0;

    constructor(name: string, authors: Author[], price: number, qty: number = 0) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }

    public getName(): string {
        return this.name;
    }

    public getAuthors(): Author[] {
        return this.authors;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getQty(): number {
        return this.qty;
    }

    public setQty(qty: number): void {
        this.qty = qty;
    }

    public toString(): string {
        let authorDetails = this.authors
            .map((author) => author.toString())
            .join(", ");
        return `Book[name=${this.name}, authors={${authorDetails}}, price=${this.price}, qty=${this.qty}]`;
    }

    public getAuthorNames(): string {
        return this.authors.map((author) => author.getName()).join(", ");
    }
}

export = { Author, Book };
