const mayorEntre4v1 = require("./lib/lib1");
const mayorEntre4v2 = require("./lib/lib2");
const mayorEntre4v3 = require("./lib/lib3");
const mayorEntre4v4 = require("./lib/lib4");

let n1 = 500;
let n2 = 400;
let n3 = 300;
let n4 = 200;

const mayor1 = mayorEntre4v1(n1, n2, n3, n4);
const mayor2 = mayorEntre4v2(n1, n2, n3, n4);
const mayor3 = mayorEntre4v3(n1, n2, n3, n4);
const mayor4 = mayorEntre4v4(n1, n2, n3, n4);

console.log("n1", n1);
console.log("n2", n2);
console.log("n3", n3);
console.log("n4", n4);
console.log("mayor1", mayor1);
console.log("mayor2", mayor2);
console.log("mayor3", mayor3);
console.log("mayor4", mayor4);
