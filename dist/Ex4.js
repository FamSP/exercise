"use strict";
class Shape {
    constructor(color, filled) {
        this.color = "red";
        this.filled = true;
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    ToString() {
        return `Shape[color = ${this.color}, filled = ${this.filled}]`;
    }
}
class Circle extends Shape {
    constructor(color, filled, radius) {
        super(color, filled);
        this.radius = 1.0;
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * (this.radius * this.radius);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    ToString() {
        return `Circle[Shape[${super.ToString()}],radius = ${this.radius}]]`;
    }
}
class Rectangle extends Shape {
    constructor(color, filled, width, length) {
        super(color, filled);
        this.width = 1.0;
        this.length = 1.0;
        this.width = width;
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = this.length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return this.width * 2 + this.length * 2;
    }
    ToString() {
        return `Rectangle[${super.ToString()}],width=${this.getWidth()},length=${this.getLength()}]`;
    }
}
class Square extends Rectangle {
    constructor(side, color, filled) {
        super(color, filled, side, side);
    }
}
