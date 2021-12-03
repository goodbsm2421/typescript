{   //bad -> number 만 확인이 가능하고 다른 타입들은 확인 불가능
    function checkNotNull(arg: number | null): number {
        if(arg === null) {
            throw new Error('not valid number!')
        }
        return arg;
    }

    //bad -> any를 쓰면 타입의 정보가 없어지기때문에 bad
    function checkNotNull2(arg: any | null): any {
        if(arg === null) {
            throw new Error('not valid number!')
        }
        return arg;
    }

    //generic 이용
    function checkNotNullGeneric<Type>(arg: Type | null): Type { // Type 이라고 쓰기보단 짧게 T
        if(arg === null) {
            throw new Error('not valid number!')
        }
        return arg;
    }
    const number = checkNotNullGeneric(123);
    const boal: boolean = checkNotNullGeneric(true);
}