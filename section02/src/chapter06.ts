// 1. any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";
anyVar.toUpperCase();

let num: number = 10;
num = anyVar;

// 2. unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => { };

// num = unknownVar; // 에러, 모든 타입의 변수에 unknown타입은 들어갈 수 없다
// unknownVar.toUpperCase(); // 에러, 이것뿐만이아니라 사칙연산도 쓸수가 없다
// 단 unknown타입의 현재 변수가 확실히 밝혀졌을 때만 정제해서 사용가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}