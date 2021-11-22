{
    /**
     * Type Assertions ( 추천하지않음 )
     */

    function jsStrFunc():any {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length) 
    // 리턴하는 타입이 확실하다면 이런식으로 가능
    // 단 리턴값과 assertion 이 다르다면 undefined를 리턴

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)) // 에러

    
}