// operators
// 1. assignment operators

let x = 4;
x += 2; // 6
x -= 4; // 2
x *= 5; // 10
x /= 2; // 5
x %= 2; // 1

// console.log(x);
 
// 2 arithmetic operations
let a = 4,
    b = 2;
let output = a + b; // 6
output = a - b; // 2
output = a * b; // 8
output = a / b; // 2
output = a % b; // 0
output = a **2; // 16
output = ++a; // 5
output = --b; // 1

// concatenation
output = " hello " + " students ";

// 3 comparison operation
let n = 4;
let m = 2;

output = n == m; //falase
output = n === m; //falase
output = n != m; //true
output = n > m; //true
output = n >= m; //true
output = n < m; //falase
output = n <= m; //falase
// 4 logical operators
// 4.1 logical AND
output = true && true; // true
output = true && false; //false
output = false && true; //false
output = false && false; //falase
output = 2 > 3 && 3 < 1; //falase 
output = 3 != 4 && 7 != 7; //true

//4.2 logical OR
output = true || true; // true
output = true || false; //true
output = false || true; //true
output = false || false; //false
output = 2 > 3 || 4 < 8; //true 
output = 3 != 4 || 7 != 7; //true

// 4.3 logical not
output = !true; //false
output = !false; //true
output = !(false || true); //false


console.log(output)