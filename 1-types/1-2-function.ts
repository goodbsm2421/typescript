{
    // JavaScript (안좋은 예)
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // TypeScript
    function add(num1: number, num2:number):number {
        return num1 + num2
    }



    // JavaSciprt (안좋은 예)
    // function jsFetchNum(id) {
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // TypeScript
    function fetchNum(id: string): Promise<number> {
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }


    // Optional parameter ( ? 를 이용해서 인자를 전달해도되고 안해도됨 )
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs')

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage(); // 아무것도 전달하지않으면 default 값을 설정해뒀기때문에 default값을 출력

    // Rest parameter 
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
}