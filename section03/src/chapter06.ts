// 타입 단언
type Person = {
  name: string;
  age: number;
};

// 변수에 타입을 지정해주고 싶으나 값은 나중에 넣어줄때
// as
let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// dog는 Dog 타입으로 단언되었으므로, TypeScript는 name과 color만 검사합니다.
// breed 속성은 Dog 타입에 없지만, 타입 단언으로 인해 무시됩니다.
let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 단언식 : 값 as 단언
// A as B
// A가 B의 슈퍼타입이거나
// Ar가 B의 서브타입 이여야한다

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; // 에러
let num3 = 10 as unknown as string; // 중간에 unknown을 낀 다중단언을 하면 모두 단언 가능하다


// const 단언
let num4 = 10 as const; // num4는 const로 선언한 것과 같은 효과

// 객체 타입과 함께 했을 때 활용도 가 있다
let cat = {
  name: "야옹",
  color: "yellow",
} as const; // 속성이 readonly로 추론된다.
// cat.color = "black"; // 에러, 그래서 값을 변경할 수 없다.


// Non Null 단언 
// !
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

// const len: number = post.author?.length; // 에러, undefined가 될 수도 있기 때문에 number|undefined 타입이 되어야한다
const len: number = post.author!.length;  // post.author이 null이나 undefined가 아니라고 만들어주는 것