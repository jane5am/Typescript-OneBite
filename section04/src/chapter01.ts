// 함수타입 표현식
type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const add2: (a: number, b: number) => number = (a, b) => a + b; // 이렇게도 가능
const sub:Operation = (a, b) => a - b;
const mul:Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

// 호출 시그니쳐 (콜 시그니쳐)
type Operation2 = {
  (a: number, b: number): number;

  // 호출시그니터 타입에서는 변수의 타입도 같이 설정해줄 수 있다
  name: string;
};
 
const add3: Operation2 = (a, b) => a + b;
const sub2:Operation2 = (a, b) => a - b;
const mul2:Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;