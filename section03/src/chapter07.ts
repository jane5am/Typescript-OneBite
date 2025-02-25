// 타입 좁히기
// 조건문 등을 이용해서 넓은 타입에서 좁은 타입으로 타입을 좁히는 방법

type Person = {
  name: string;
  age: number;
};

// value 값이 number일 경우 toFixed 메서드 적용
//           string일 경우 toUpperCase 메서드 적용
//           Date일 경우 getTime 메서드 적용
//           Person일 경우 name은 age살 입니다 출력
function func(value: number | string | Date | null | Person ) {
  value; // 타입 추론한 걸 보면 number|string
  // value.toFixed(); // 에러, number | string 타입에서는 사용불가
  // value.toUpperCase(); 에러, number | string 타입에서는 사용불가 
  
  if (typeof value === "number") { // 타입 가드
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // else if (typeof value === "object") {
  //   console.log(value.getTime());
  //   // 단 value 반환타입에 유니온 null은 추가하면 에러 발생
  //   // object타입을 typeof 해도 object가 반환되기 때문에 null일때 getTime 할 수 없어 에러 발생
  // }
  else if (value instanceof Date) { // value가 Date객체인지 물어봐서 t/f를 반환한다. null은 false를 반환하게 된다.
    console.log(value.getTime());
  }
  // else if (value instanceof Person) {
  //   // Person은 우리가 만들어준 타입 객체지 클래스가 아니다
  //   // instanceof의 오른쪽에는 클래스가 와야하기 떄문에 에러가 난다
  // }

  else if (value && "age" in value) {
    // age가 value안에 있냐
    // "age" in value 라고만 하면 value가 null일 경우도 있기 때문에 오류 발생
    // 앞에 value가 있다고 &&연산자를 통해 value가 있을 때만 else if문이 실행되도록 한다
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
};