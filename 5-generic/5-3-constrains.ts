{
    interface Employee {
        pay(): void;
    }

    class FullTimeEmployee implements Employee{
        pay() {
            console.log('full time!!')
        }
        workFullTime(){}
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log('part time!!')
        }
        workPartTime(){}
    }

    function pay<T extends Employee>(employee: T): T { // generic 이지만 Employee를 확장한 클래스만 가능
        employee.pay();
        return employee;
    }

    const ellie = new FullTimeEmployee();
    const bob = new PartTimeEmployee();

    const ellieAfterPay = pay(ellie);
    const bobAfterPay = pay(bob);


    //------

    const obj = {
        name: 'ellie',
        age: 20,
    }

    function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key]
    }

    console.log(getValue(obj, 'name')) // ellie
    console.log(getValue(obj, 'age')) // 20

}