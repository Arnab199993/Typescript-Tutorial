var _a;
var s1 = Symbol("d1");
var s2 = Symbol("d2");
var data = (_a = {},
    _a[s1] = "Some Data",
    _a);
console.log(s1 === s2);
console.log(s1.toString());
console.log(data[s1]);
