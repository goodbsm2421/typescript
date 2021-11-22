{
    /**
     * Type Inference
     */

    let text = 'hello'; // 타입을 따로 설정해주지않았지만 text 는 string이라고 자동으로 추론
    // text = 1 ( Error )

    function add(x: number, y:number) { // return 타입을 설정해주지않아도 알아서 추론(inference)해준다 하지만 명시하지않는것은 비추천
        return x + y;
    }
}