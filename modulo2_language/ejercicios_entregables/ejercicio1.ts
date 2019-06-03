const head = (array:string[]):string => {
  const [first] = array;
  return first;
}

const tail = (array:string[]):string[] => {
   const [,...rest] = array;
   return rest;
}

const init = (array:string[]):string[] => 
  array.slice(0, array.length-1);

const last = (array:string[]):string =>
  array.slice(-1)[0];


console.log(head(["1","2","3","4","5"]));
console.log(tail(["1","2","3","4","5"]));
console.log(init(["1","2","3","4","5"]));
console.log(last(["1","2","3","4","5"]));