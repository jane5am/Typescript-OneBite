// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일되도 사라지지 않고 자바스크립트의 객체로 변환된다. 그래서 Role.GUEST, 이런식으로 쓸 수 있는 것

enum Role { // 숫자 할당을 제거해도 위에서 부터 자동으로 0, 1, 2 순서대로 들어간다
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language{
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "Kim",
  role: Role.ADMIN, // 0으로 저장된다
  language: Language.korean,
};

const user2 = {
  name: "Yeon",
  role: Role.USER, 
};

const user3 = {
  name: "what",
  role: Role.GUEST,
}

console.log(user1.role, user1.language); // 0 ko