const clone = (source:object) => {
  return {...source};
}

const merge = (a: object, b:object) => {
  return {...b,...a};
}

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

console.log(merge(a,b));