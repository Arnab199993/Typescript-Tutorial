let s1 = Symbol("d1");
let s2 = Symbol("d2");
let data = {
  [s1]: "Some Data",
};
console.log(s1 === s2);
console.log(s1.toString());
console.log(data[s1]);
