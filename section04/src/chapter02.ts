// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮을가를 판단
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가
// 이 두가지가 모두 만족해야 두 함수의 타입이 호환된다

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // 에러, 다운캐스팅이기 때문에 


// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => { };
let d: D = (value) => { };

// c = d; // 에러, 매개변수에서는 업캐스팅이 불가
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 에러 dog.color를 담을 Animal의 파라미터가 없음
dogFunc = animalFunc;


// 2.2 매개변수의 개수가 다를때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => { };
let func2: Func2 = (a) => { };

func1 = func2; // 매개변수 개수가 1개인 걸 2개인 변수에 담는 건 OK
// func2 = func1; // 에러, 매개변수 개수가 2개인걸 1개인 변수에 담는건 안된다