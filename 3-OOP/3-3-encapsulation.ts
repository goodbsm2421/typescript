{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    //public - 기본적으론 다 public으로 설정되어있음.
    //private - 외부에서 접근하지못함.
    //protected - 상속을 할 때 외부에서 접근할 수 없지만, 자식 클래스에서는 접근이 가능함.

    class CoffeeMaker {
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

// class 내에서는 let 이나 const 등을 쓰지 않는다.
// class 내에서 변수에 접근하기위해서는 변수앞에 항상 this. 을 붙여야한다.