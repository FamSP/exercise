class Shape{
    private color:string = "red"
    private filled:boolean = true

    constructor(color:string,filled:boolean){
        this.color = color;
        this.filled = filled;
    }
    public getColor():string{
        return this.color;
    }

    public setColor(color:string){
        this.color = color
    }

    public isFilled():boolean{
        return this.filled
    }

    public setFilled(filled:boolean):void{
        this.filled = filled
    }

    public ToString(){
        return `Shape[color = ${this.color}, filled = ${this.filled}]`
    }
}

class Circle extends Shape{
    private radius:number = 1.0

    constructor(color:string,filled:boolean,radius:number){
        super(color, filled);
        this.radius = radius;
    }
    
    public getRadius():number{
       return this.radius
    }

    public setRadius(radius:number):void{
        this.radius = radius
    }

    public getArea():number{
        return Math.PI * (this.radius * this.radius);
    }

    public getPerimeter():number{
        return 2 * Math.PI * this.radius;
    }

    public ToString(): string {
        return `Circle[Shape[${super.ToString()}],radius = ${this.radius}]]`
    }
}

class Rectangle extends Shape{
    private width:number = 1.0;
    private length:number = 1.0;

    constructor(color:string,filled:boolean, width:number,length:number){
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    public getWidth():number{
        return this.width
    }

    public setWidth(width:number):void{
        this.width = width
    }

    public getLength():number{
        return this.length
    }

    public setLength(length:number):void{
        this.length = this.length
    }

    public getArea():number{
        return this.width * this.length
    }

    public getPerimeter():number{
        return this.width*2 + this.length*2
    }

    public ToString(): string {
        return `Rectangle[${super.ToString()}],width=${this.getWidth()},length=${this.getLength()}]`
    }
}

class Square extends Rectangle{

    constructor(side:number, color:string,filled:boolean){
        super (color,filled,side,side);
    }
}