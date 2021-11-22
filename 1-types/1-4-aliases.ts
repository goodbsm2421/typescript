{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea'
    type Student = {
        name: string;
        age: number;
    }
    const student: Student = {
        name: 'sm',
        age: 1
    }

    /** *
     * String Literal Types
     */
    type Name = 'name' // 문자열도 타입으로 지정할 수 있음
    let ellieName: Name;
    ellieName = 'name';

    type Boal = true; // true 나 다른 값 들도 타입으로 지정할 수 있음. 이걸 왜 쓰는가 ?
}