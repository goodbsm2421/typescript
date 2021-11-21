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
}