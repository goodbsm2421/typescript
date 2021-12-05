{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7  // class level
    coffeeBeans: number = 0; // instance level

    constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans
    }
    makeCoffee(shots: number): CoffeeCup {
        if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!')
        }
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        }
    }
    }
    const maker = new CoffeeMaker(32)
    console.log(maker)
}

// class 내에서는 let 이나 const 등을 쓰지 않는다..
// class 내에서 변수에 접근하기위해서는 변수앞에 항상 this. 을 붙여야한다.