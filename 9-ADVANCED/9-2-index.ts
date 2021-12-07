{
    const obj = {
        name: 'ellie',
    }
    obj.name; // ellie
    obj['name']; // ellie

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name'] // string
    const text: Name = 'hello' // 다른타입은 에러

    type Gender = Animal['gender']; // 'male' | 'female'

    type Keys = keyof Animal;
    const key: Keys = 'age'

    type Person = {
        name: string;
        gender: Animal['gender']
    }

}