let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "Lee",
};

user.id;

user = {
  name: "홍",
}

let config: {
  readonly apikey: string; // 값이 바뀌면 안될 때 readonly를 붙인다
} = {
  apikey: "MY API KEY",
};

// config.apikey = "hacked"; // 에러, readonly이기 때문에