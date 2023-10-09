let a = 1;
let b = 2;

console.log(a);
console.log(b);

let temp = a;
a = b;
b = temp; 
console.log(a);
console.log(b);

// OU podemos utilizar
[a, b] = [b, a];

