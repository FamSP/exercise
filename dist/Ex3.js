"use strict";
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    person() {
        return this.name, this.address;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    toString() {
        return `name = ${this.name},address = ${this.address}`;
    }
}
class Student extends Person {
    constructor(name, address, program, year, fee) {
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    getprogram() {
        return this.program;
    }
    setProgram(program) {
        this.program = program;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    getFee() {
        return this.fee;
    }
    setFee(fee) {
        this.fee = fee;
    }
    toString() {
        return `Stdent[Person = [${super.toString()}],program=${this.program},year=${this.year},fee=${this.fee} ]`;
    }
}
class Staff extends Person {
    constructor(name, address, school, pay) {
        super(name, address);
        this.school = school;
        this.pay = pay;
    }
    getSchool() {
        return this.school;
    }
    setSchool(school) {
        this.school = school;
    }
    getPay() {
        return this.pay;
    }
    setPay(pay) {
        this.pay = pay;
    }
    toString() {
        return `Stdent[Person = [${super.toString()}],School =${this.school},Pay = ${this.pay}]`;
    }
}
module.exports = { Person, Staff, Student };
