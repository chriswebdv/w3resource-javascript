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


let sum = 0;

while (true) {
    let value = +prompt("Enter a number", "");

    if (!value) {
        break;
    }
    sum += value;
}
console.log("Sum: " + sum);

for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        continue
    } else {
        console.log(i);
    }
}

let j = 0;

while (j < 3) {
    alert(`number ${j}!`);
    j++
}

while (true) {
    let ask = +prompt("Give number: ", "");
    if (ask <= 100) {
        console.log("Input again ");
    } else {
        break
    }
    console.log(ask);
}

