const concat = (arrayA:number[], ArrayB:string[]):Array<number|string> => [...arrayA,...ArrayB];

const multipleConcat = (...args) => {
  let result = [];
  args.forEach((value) => result = concat(result,value));
  return result;
}

console.log(concat([1,2,3], ["a","b","c"]));
console.log(multipleConcat([1,2,3], ["a","b","c"], [true,false,34.3]));