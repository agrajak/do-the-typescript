// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

function greeter(person: string){
  return "Hello, " + person;
}

let user = "Jane User"
let list = [0,1,2]
document.body.textContent = greeter(user);

// .ts -> .js using `tsc greeter.ts`

// document.body.textContent = greeter(list); -> list는 string의 형태가 아니므로 에러 발생.

