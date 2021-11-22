{
    // JavaScript

    // let es6
    let name = 'hello';
    name = 'hi';

    // const
    const age = 5;
    // age = 5; (x) 한번 선언된 변수는 재 할당이 불가능 (const)
}

{
    // JavaScript
    // Primitive(원시타입): number, string, boolean, bigint, symbol, null, undefined
    // object: function, array

    //  TypeScript
    // number
    const num:number = 1; // type을 미리 정해둔 상태에서 다른 type을 넣게되면 바로 에러가 뜸

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = true;

    //undefined
    let name: undefined; // 말이안되는 타입 설정
    let age: number | undefined;
    age = undefined;
    age = 1;

    //null
    let person: null; // 말이안되는 타입 설정
    let person2: string | null;
    person2 = 'hi'
    person2 = null

    // unknown
    let notSure: unknown = 0; // 어떤타입인지 모를때 웬만하면 쓰지 않는것이 좋음
    notSure =  'he';
    notSure = true;

    // any
    let anything: any = 0; // 어떤것이든 담을 수 있는 변수 마찬가지로 쓰지 않는것이 좋음
    anything = 'hello';

    // void
    function print():void { // 함수에서 아무런값도 리턴하지않으면 void // 어떤값을 리턴하는지 타입을 정해주는게 좋은 습관
        console.log('hello');
    }
    // void는 함수에서만

    // never
    function throwError(message: string): never { // 마찬가지로 아무것도 리턴하지 않을 때 사용
        throw new Error(message); // 1. 에러를 던질 때, 혹은 while문같은 리턴하는값이 없을 때 사용
    }
}