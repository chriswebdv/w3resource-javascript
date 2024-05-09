// For loop countdown

for(let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Lift off!");

let i = 10;

while (i >= 1) {
    console.log(i);
    i--
}
console.log("second lift off!");
    
const arr = [
    "tiger",
    "lion",
    "cheetah",
    "monkey",
    "hyena"
]

let myAnimals = "My animals are: "
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "cheetah") {
        myAnimals += `love them ${arr[i]}`
    } else {
        myAnimals += `${arr[i]}`
    }
}

console.log(myAnimals);
