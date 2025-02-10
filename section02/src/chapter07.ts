// 1. void
// 아무것도 없음을 의미하는 타입
function func1():string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;  // 에러, 아무것도 담을 수 없다
// a = "hello" // 에러
// a = {} // 에러
a = undefined // undefined만 담을 수 있다
// a = null; // 이건 "strictNullChecks": false 일 경우에만 가능


// 2. never 타입
// 불가능한 타입, 존재하지 않는 타입

// 이 함수는 반환이 절대 불가능하다 그래서 never 타입을 사용한다
function func(): never {
  while (true) { }
}

// 실행되자마자 Error를 던질거기 때문에 never타입을 사용한다
function func4(): never {
  throw new Error();
}

let b: never; // 이 변수에는 아무것도 담을 수 없다.