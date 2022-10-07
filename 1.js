let someVar = "i'm a string";

console.log(typeof someVar);
console.log(someVar);

someVar = 5;

console.log(typeof someVar);
console.log(someVar);

if (5 > 4) {
  console.log("condition true");
}

let someArray = [1, 2, 3, 4, 5, 6];

console.log(someArray);

for (let i = 0; i < someArray.length; i++) {
  console.log(someArray[i]);
}

//The same as 'for' just without acces to the index
// for (let element of someArray) {
//   console.log(element);
// }

let someObject = {
  color: "white",
  weight: 5,
};
console.log(someObject);
