// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재

// 1. 합집합 - Union 타입
let a: string | number; // string과 number의 둘 다 넣을 수 있다
                        // string, number union타입이라고 부른다
a = "hello";
a = 1;

let arr: (number | string | boolean)[] = [1, "hing, true"];

// 타입 별칭을 이용해서 유니온 타입 만들기 가능
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person

let union1: Union1 = { // Dog 타입이니 가능
  name: "",
  color: "",
};

let union2: Union1 = { // Person 타입이니 가능
  name: "",
  language: "",
};

let union3: Union1 = { // Dog, Person 교집합 합집합 가능
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = { // 불가능
//   name: "",
// }


// 2. 교집합 타입 - Intersection 타입
let variable: number & string; // 기본타입의 교집합타입은 never

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
} // Dog, Person 객체의 속성을 모두 가지고 있는 타입
