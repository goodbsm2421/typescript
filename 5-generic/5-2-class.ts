{
    interface Either<L, R> { // generics 에선 LEFT RIGHT 보단 짧게 L, R
        left: () => L;
        right: () => R;
    }

    class SimpleEither<L, R> implements Either<L, R> {
        constructor(private leftValue: L, private rightValue: R) {}
        left(): L {
            return this.leftValue
        }
        right(): R {
            return this.rightValue
    }
  }
  const either = new SimpleEither(4, 5);
  either.left(); // 4
  either.right();  // 5
}