// 1. 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "name",
  nickname: "wow",
  birth: "1700.01.01",
  bio: "헬로",
  location: "no",
};

// 2. 인덱스 시그니처
// key와 value를 기준으로 객체의 타입을 정의할 수 있는 문법
type CountryCodes = {
  [key: string]: string;
}

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 가져야하는 속성을 추가할 수도 있다
                // 단 추가하는 속성의 타입은 기존 타입과 일치하거나 호환되어야 한다
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};