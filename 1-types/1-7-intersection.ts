{
    /**
     * Intersection Types: &
     */
    type Student = {
        name: string;
        score: number;
    }
    
    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.score, person.employeeId)
        // 인자 타입을 student & worker 로 설정했기때문에 두가지 타입 모두 접근 가능
    }

    internWork({ // score 와 worker 타입을 모두 사용해줘야 에러가 안남
        name: 'sm',
        score: 1,
        employeeId: 123,
        work:() => {}
    })
}
