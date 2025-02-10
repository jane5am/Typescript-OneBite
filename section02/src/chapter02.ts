// 배열
let numArr:number[] = [1, 2, 3];

let strArr: string[] = ["hello", "wow"];

let boolArr: Array<boolean> = [true, false, true];

// 배열의 들어가는 요소들의 타입이 다양할 경우
let multiArr:(number|string)[] = [1, "hello"];

let multiArr1: (number | string)[] = [1, "hello", 2, 3, 5, 3];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr:number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 - 자바스크립트에는 없지만 타입스크립트에서만 존재
let tup1: [number, number] = [1, 2];

let multiArr2: [string, boolean] = ["ABC", true];

// let multiArr3: [string, boolean] = ["ABC", true, flase];   // 에러, 타입 갯수 만큼만 지정가능

// let tup2: [number, string, boolean] = [1, true, "2"] // 에러, 타입과 갯수는 맞지만 순서가 틀림

const users: [string, number][] = [
  ["Lee", 1],
  ["Kim", 2],
];

// 튜플은 결국 배열이기 때문에 아래 같은 메서드도 사용 가능하고
// 배열 메서드를 사용할 때는 길이의 제한이 없어진다. 그래서 에러안나게 주의해야한다!
tup1.push(1);
tup1.pop();