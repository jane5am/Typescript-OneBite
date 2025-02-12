// Unknown 타입
function unknownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "Hi";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // 다운 캐스팅 - 모두 에러
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
};

// never 타입
// never타입은 모든 타입의 서브(자식)타입, 공집합
function neverExam() {
  function neverFunc(): never {
    while(true){}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅 - 모두 에러
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
};

// void타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // undefined는 void의 자식 타입이므로 가능
  }

  let voidVar: void = undefined;
};

// any 타입
// any타입은 자기한테 오는 업캐스팅, 다운캐스팅 모두 가능하다
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // any 타입이 unKnown 타입의 자식타입이지만 가능!
  // any타입 한정으로 unKnown타입도 다운캐스팅 가능

  undefinedVar = anyVar; // undefined타입이 any타입의 자식타입이지만 가능!

  // neverVar = anyVar; // 에러, never 타입에 다운캐스팅은 불가능
};