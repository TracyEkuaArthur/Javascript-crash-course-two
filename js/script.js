let firstName = "Tracy";
let lastName = "Arthur";
let age = 30;

console.log(firstName);
console.log(lastName);
console.log(age);

console.log(
  "My name is " + firstName + " " + lastName + " I am " + age + " years old"
);
console.log(`My name is $(firstName) $(lastName).I am ${age} years old.`);

let fruits = ["Mango", "Apple", "Orange", "Grapes"];
console.log(fruits);
fruits.push("food");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("pear");
console.log(fruits);

fruits.shift();
console.log(fruits);

let answer = fruits.includes("Apple");
console.log(answer);

// urinary operator
let a = 10;
let b = 9;
console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);

// comparison
// let a =10;
// let b =6;
let c = "10";
console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a == c);
console.log(a===c);

// control flow

let score = 80;
if(score >= 80){
  console.log("You had A");
}else if (score >= 75) {
  console.log("You had B+")
}

else if(score >=70){
  console.log("You had B");
}

else if(score>=65){
  console.log("You had C+");
}

else if(score>=60){
  console.log("You had C");
}

else if(score >=55){
  console.log("You had D+");
}

else if(score >= 50){
  console.log("You had D");
}

else if(score >=45){
  console.log("You had E");
}

const gender = "Male"

switch (gender) {
  case "Male":
    console.log("Go to male washroom");
    break;

    case "Female":
      console.log("Go to female washroom");
      break;
      default:
        console.log("No washroom for you");
}

// Let count = 1;

// while (a <