{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup
    }

    class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7  // class level
    private coffeeBeans: number = 0; // instance level

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
    class CafeLatteMachine extends CoffeeMachine { // 상속을 위하여 extends를 사용
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots) // parent class 에 있는 기능을 재사용하기위해 super 사용
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        // 다형성을 이용하면 parent class 를 이용해서 여러가지 기능을 추가할 수 있다.
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return {
                ...coffee,
                hasSugar: true,
            }
        }
    }

    const machines = [
        new CoffeeMachine(16),
    ]

    const machine = new CoffeeMachine(23);
    const latteMachine = new CafeLatteMachine(23);
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee)
}