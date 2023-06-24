let a = [1, 2, 3, 4];
console.log(a);

// 1. directly assign to empty array
/*
cannot used this method of emptying an array
if variable is declared as const, because const can't be re-assigned
 */
a = [];
console.log(a);

// 2. setting the array's length to 0
a.length = 0;
console.log(a);

//3. using splice method
a.splice(0, a.length);
console.log(a);

//4. using while loop and pop method
while (a.length > 0) {
  a.pop();
}
console.log(a);



/* if we copy the array to another variable like this 
and try to empty the first array what wil happen? */
let a = [1, 2, 3, 4];
let b=a;
console.log(b);
/* then in first method a=[], only the first array "a" will be cleared 
and b will remain unaffected */

/* in the rest of the other methods, both the arrays will get cleared */