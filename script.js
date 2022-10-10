const countEl = document.getElementById("count");
const entryEl = document.querySelector(".entry");

let count = 0;

function increaseCount() {
    count++;
    countEl.innerText = count;
}

function save() {
   let entryText = count + " -  ";
   entryEl.innerHTML += entryText;
   countEl.innerHTML = 0;
   count = 0;
}



let firstName = "Oyedolapo";
let lastName = "Oyeniran";
let fullName = firstName + " " + lastName;
console.log(fullName);


let name = "Dolly";
let greeting = "Hi there";
function formalGreeting() {
    let formal = greeting + ", " + name + "!";
    console.log(formal);

}
formalGreeting();

let myPoints = 3;

function add3Points() {
    myPoints += 3;

}

function remove1Points() {
    myPoints -= 1;

}
add3Points();
add3Points();
add3Points();
remove1Points();
remove1Points();
console.log(myPoints);
