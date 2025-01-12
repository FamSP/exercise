class Person{
    private name:string;
    private address:string;
    
    constructor(name:string,address:string){
        this.name = name;
        this.address = address;
    }

    public person(): string {
        return this.name,this.address
    }

    public getName(): string {
        return this.name
    }

    public getAddress(): string{
        return this.address
    }

    public setAddress(address:string): void{
        this.address = address;
    }

    public toString():string{
        return `name = ${this.name},address = ${this.address}`
    }

}

class Student extends Person {
    private program:string;
    private year:number;
    private fee:number;

    constructor(name:string,address:string,program:string,year:number,fee:number){
        super (name , address)
        this.program = program;
        this.year = year;
        this.fee = fee;

    }


    public getprogram():string{
        return this.program
    }

    public setProgram(program:string):void{
        this.program = program;
    }

    public getYear():number{
        return this.year;
    }

    public setYear(year:number):void{
        this.year = year
    }

    public getFee():number{
        return this.fee;
    }

    public setFee(fee:number){
        this.fee = fee;
    }

    public toString(): string {
        return `Stdent[Person = [${super.toString()}],program=${this.program},year=${this.year},fee=${this.fee} ]`
    }
}

class Staff extends Person {
    private school:string;
    private pay:number;

    constructor(name:string,address:string,school:string,pay:number){
        super (name,address)
        this.school = school;
        this.pay = pay;
    }

    public getSchool(){
        return this.school
    }

    public setSchool(school:string){
        this.school = school;
    }

    public getPay(){
        return this.pay
    }

    public setPay(pay:number){
        this.pay = pay;
    }

    public toString(): string {
        return `Stdent[Person = [${super.toString()}],School =${this.school},Pay = ${this.pay}]`
    }
}

export = { Person, Staff , Student };