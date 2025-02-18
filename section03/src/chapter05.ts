// 1. 타입 추론
// 하지만 모든 상황에 타입을 잘 추론해주지 않는다

// 기본 타입
// 초기 값을 기준으로 변수의 타입을 추론한다
let a = 10; // number
let b = "hello" // string
let c = {
  id: 1,
  name: "LEE",
  profile: {
    nickname: "wow",
  },
  urls: ["https://winter.com"],
};
// let c: {
//     id: number;
//     name: string;
//     profile: {
//         nickname: string;
//     };
//     urls: string[];
// }

let { id, name, profile } = c; // id: number, name: string, profile: { nickname: string}

let [one, two, three] = [1, "hello", true]; // one: number, two: string, three: boolean


// 함수
// 리턴 타입은 리턴문을 기준으로 자동 추론한다
// 매개변수는 기본값을 기준으로 자동 추론한다
function func(message="wow" /* message: string 자동 추론*/ ) { // func(): string, 리턴타입 자동추론 
  return "hello"
}


// any타입의 진화
let d; // 변수만 선언하면 타입추론은 any
d = 10; // 초기화를 하면 그 초기값으로 타입추론, 그래서 number
// d.toUpperCase // 에러, 문자열 메소드이기 때문
d.toFixed();

d = "fun";
d.toUpperCase();
// d.toFixed();// 에러, 넘버타입이 아니라서


// const
// const 변수일 때는 리터럴 타입이 된다
const num = 10; // 타입이 number가 아닌 10 리터럴 타입
const str = "hello";

let arr = [1, "string"] // (string | number)[]