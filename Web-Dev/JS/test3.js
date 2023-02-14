function regularFunction(a) {
  console.log(`Hello from regularFunction ${a}`);
}

let arrowFunction = b => console.log(`Hello from arrowFunction ${b}`);

regularFunction(10);
arrowFunction(20);