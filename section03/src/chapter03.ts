// 객체 타입간의 호환성
// 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "강쥐",
  color: "white",
  breed: "물개",
};

animal = dog; // OK, 업캐스팅
// dog = animal;  // 에러, 다운캐스팅
// 객체들도 기본타입들 처럼 서로 슈퍼타입 - 서브타입 관계를 가진다
// 같은 속성을 가지면서 속성이 더 적은 타입이 슈퍼타입이 된다.


type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react",
};

book = programmingBook;
console.log(book); // { name: '한 입 크기로 잘라먹는 리액트', price: 33000, skill: 'react' }
// 속성이 name, price인 타입인 book 변수에 속성이 3개인 programmingBook 변수 값 넣기 가능

// * 초과 프로퍼티 검사
// let book2: Book = {
//   name: "짱 재밌는 책";
//   price: 12000
//   skill: "java"
// };
// 에러, 하지만 다시 타입이 Book인 변수에 속성이 3개인 객체를 넣으려고 하니까 에러가난다
// 초과 프로퍼티는 변수를 초기화할 때 초기화하는 값으로 객체 리터럴을 넣으면 실행된다
// 그래서 실제 타잉에 정의해놓지 않은 속성이 들어오면 에러가 난다
// 단 변수를 넣을 때는 검사를 하지 않기 때문에 book = programmingBook 이 가능 했던 것

// 이렇게 파라미터로 객체 리터럴을 넣을 때도 초과프로퍼티 검사가 실행되기 때문에
// 아래 코드도 에러가 난다
// function func(book: Book){};
// func({
//   name: "소설책",
//   price: 2400,
//   skill: "vue",
// });