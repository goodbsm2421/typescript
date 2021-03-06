{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup
    }

    class CoffeeMachine implements CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7  // class level
    coffeeBeans: number = 0; // instance level

    constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans
    }

    fillCoffeeBeans(beans:number) {
        if(beans < 0) {
            throw new Error('value for beans should be greater than 0')
        }
        this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
        if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!')
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        }
    }
    }
    const maker = new CoffeeMachine(32)

}