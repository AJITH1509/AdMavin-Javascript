// Write a Javascript program that takes an array of objects and arranges them by a specified field
// in an ascending order of the value of that field and returns the sorted object array.

//     Expected Output
// {
// ‘21’ : [{name : ‘Alice’, age : 21}, {name : ‘Max’, age : 21}]
// ‘23’ : [{name : ‘June’, age : 23}]
// ‘24’ : [{name : ‘Alice’, age : 24}, {name : ‘July’, age : 24}]
// }
let people = [
  { name: "Alice", age: 21 },
  { name: "Alice", age: 24 },
  { name: "Max", age: 21 },
  { name: "June", age: 23 },
  { name: "July", age: 24 },
];

const arrangeByAge = (people) => {
  let arrangedObj = {};
  //sort age in ascending order
  let sortedArray = people.sort((a, b) => {
    return a.age - b.age;
  });
  //iterate through sortedArray
  sortedArray.forEach((person) => {
    if (arrangedObj[person.age]) {
      arrangedObj[person.age].push(person);
    } else {
      arrangedObj[person.age] = [person];
    }
  });

  return arrangedObj;
};
console.log(arrangeByAge(people));
