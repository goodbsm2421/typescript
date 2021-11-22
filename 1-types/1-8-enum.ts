{
/**
 * Enum
 */

    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2})
    const dayOfToday = DAYS_ENUM.MONDAY

    // TypeScript
    enum Days { // enum에 값을 지정해주지않으면 0부터 시작, 값을 할당할수도 있음
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days.Monday)
    console.log(Days.Sunday)

    // 타입스크립트에서는 enum 보다는 union type 을 사용
}