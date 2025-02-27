// 함수 타입 정의
// 매개변수 타입 + 리턴 타입 정의
function func(a: number, b: number) {// 리턴 타입은 타입추론되었음
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a:number, b:number):number => a + b;

// 함수의 매개변수
// 매개변수에 기본값을 넣어줄수도 있다
// 선택적 매개변수를 만들어 줄수도 있다
// 필수 매개변수는 반드시 선택적 매개변수 앞에 와야한다
function introduce(name = "Lee", age: number, tall?:number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
  // console.log(`tall : ${tall + 10}`);  // 에러, tall은 undefined일 수도 있기 때문에 undefiend에 10을 더할 수는 없다

  // 그런데 이렇게 타입가드를 만들어주면 타입좁히기가 되어 사용가능
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("Lee", 100, 199);
introduce("Lee", 100)

// ...를 사용하면 매개변수가 배열안에 담겨 전달된다
// getSum(1, 2, 3)의 매개변수는 [1,2,3]으로 전달되는 것
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum
}

getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5);

// 만약 ...rest에 들어가는 배열의 수를 제한하고 싶으면 튜플로 쓴다
// 이렇게 하면 getSum2()의 매개변수는 number타입 값 2개만 전달해야한다
function getSum2(...rest: [number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum
}