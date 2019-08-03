//https://www.typescriptlang.org/docs/handbook/basic-types.html

// boolean
let isDone: boolean = false;

// number
let decimal: number = 12;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o7012;

// string
let color: string = "blue";
color = 'red';

// array
let listWithNumbers: number[] = [1,2,3];
let listWithGeneric: Array<number> = [1,2,3];

// tuple
let x: [string, number];
x = ["hello", 10]; // -> OK
// x = [10, "hello"]; // -> Error

// enum
enum Color {Red=1, Green, Blue}
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName);

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// void
function warnUser(): void {
  console.log("This is my warning messages");
}
let unusable: void = undefined; // Declaring variables of type void is not userful because you can only assign undefined or null.

// null and undefined
let u: undefined = undefined;
let n: null = null;

// never
/*
The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns; Variables also acquire the type never when narrowed by any type guards that can never be true.

The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.
 */

function error(message: string): never { // function with never must have unreachable end point
  throw new Error(message);
}
function fail(){ // inferred return type is never
  return error("something failed");
}
function infiniteLoop(): never { // function returning never must have unreachable end point
  while (true){
  }
}

// object
declare function create(o: object | null): void;
create({props: 0});
create(null);

// type assertion
/*
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.
 */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
