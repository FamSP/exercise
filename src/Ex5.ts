class DiscountRate {
    private static serviceDiscountPremium: number = 0.2;
    private static serviceDiscountGold: number = 0.15;
    private static serviceDiscountSilver: number = 0.1;

    private static productDiscountPremium: number = 0.1;
    private static productDiscountGold: number = 0.1;
    private static productDiscountSilver: number = 0.1;

    public static getServiceDiscountRate(type: string): number {
        switch (type.toLowerCase()) {
            case "premium":
                return this.serviceDiscountPremium;
            case "gold":
                return this.serviceDiscountGold;
            case "silver":
                return this.serviceDiscountSilver;
            default:
                return 0;
        }
    }

    public static getProductDiscountRate(type: string): number {
        switch (type.toLowerCase()) {
            case "premium":
                return this.productDiscountPremium;
            case "gold":
                return this.productDiscountGold;
            case "silver":
                return this.productDiscountSilver;
            default:
                return 0;
        }
    }
}

class Customers {
    private name: string;
    private member: boolean = false;
    private memberType: string = "";

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public isMember(): boolean {
        return this.member;
    }

    public setMember(member: boolean): void {
        this.member = member;
    }

    public getMemberType(): string {
        return this.memberType;
    }

    public setMemberType(type: string): void {
        this.memberType = type;
    }

    public toString(): string {
        return `Customer[name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}

class Visit {
    private customer: Customers;
    private date: Date;
    private serviceExpense: number = 0;
    private productExpense: number = 0;

    constructor(name: string, date: Date) {
        this.customer = new Customer(name);
        this.date = date;
    }

    public getName(): string {
        return this.customer.getName();
    }

    public getServiceExpense(): number {
        return this.serviceExpense;
    }

    public setServiceExpense(expense: number): void {
        this.serviceExpense = expense;
    }

    public getProductExpense(): number {
        return this.productExpense;
    }

    public setProductExpense(expense: number): void {
        this.productExpense = expense;
    }

    public getTotalExpense(): number {
        const discountRate = DiscountRate.getServiceDiscountRate(this.customer.getMemberType());
        const serviceDiscount = this.serviceExpense * discountRate;

        const productDiscountRate = DiscountRate.getProductDiscountRate(this.customer.getMemberType());
        const productDiscount = this.productExpense * productDiscountRate;

        return this.serviceExpense - serviceDiscount + this.productExpense - productDiscount;
    }

    public toString(): string {
        return `Visit[customer=${this.customer.toString()}, date=${this.date.toISOString()}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
    }
}
