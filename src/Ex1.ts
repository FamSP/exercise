
class Author{
    private name : string;
    private email : string;

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    public getName() :string {
        return this.name;
    }

    public getEmail() :string {
        return this.email;
    }
    public setEmail(email:string) :void {
        this.email = email;
    }

    public toString() :string{
        return "Author [name = "+ this.name+ "email : "+this.email+"]"
    }

}



class Book {
    private name : string;
    private author : Author[];
    private price : number;
    private qty : number = 0;

    constructor(name : string,auther: Author[],price : number ,qty :number = 0){
        this.name = name;
        this.author = author;
        this.price = price;
        this.qty = qty;
    }

    public getName(): string{
        return this.name
    }

    public setAuthors(): Author[]{
        return this.author
    }

    public getPrice(): number{
        return this.price
    }

    public setPrice(price:number):void{
        this.price = price;
    }

    public getQty() : number {
        return this.qty;
    }

    public setQty(qty:number):void{
        this.qty = qty;
    } 

    public toString(): string{
        let details ="Book [name = "+ this.name+ "auther={ ";

        for(let i=0 ; i<= this.author.length; i++){
                   details += this.author[i].toString() + ",";
                }

        return details
            }

    public grtAuthernames():string {
        let authorNames="";
            for(let i=0 ; i<= this.author.length; i++){
                authorNames+= this.author[i].getName() + ",";
         }
         return authorNames;

    }


}
export = {Author,Book};