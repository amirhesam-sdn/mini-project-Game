let inputNumbers = document.querySelectorAll("input");
const button = document.querySelector(".click");
const reset = document.querySelector(".reset");
const text = document.querySelector(".text h2");
const color = document.querySelector(".color");
const mainDiv = document.querySelector(".game");

let numbers = [];
let userNumbers = [];

function getRoundomNumbers() {
  numbers[0] = Math.floor(Math.random() * 9 + 1);

  let r;
  while (numbers.length != 4) {
    r = Math.floor(Math.random() * 9 + 1);
    if (!numbers.includes(r)) {
      numbers.push(r);
    }
  }
}
getRoundomNumbers();
console.log(numbers);

button.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    userNumbers[i] = Number(inputNumbers[i].value);

    if ((inputNumbers[i].value > 10) | (inputNumbers[i].value < 1)) {
      alert("Error! Only numbers between 1 and 9");
      inputNumbers[i].value = "";
    }
    continue;
  }

  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === userNumbers[i]) {
      inputNumbers[i].style.backgroundColor = "green";
      inputNumbers[i].disabled = true;
      inputNumbers[i].style.color = "#000";
      counter++;
    } else if (numbers.includes(userNumbers[i])) {
      inputNumbers[i].style.backgroundColor = "yellow";
    } else {
      inputNumbers[i].style.backgroundColor = "red";
    }
  }
  if (counter == 4) {
    text.innerHTML = "congratulations! You found the password.";
    text.style.color = "red";
  }
});

reset.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    inputNumbers[i].value = "";
    inputNumbers[i].style.backgroundColor = "#fff";
    inputNumbers[i].disabled = false;
  }

  text.innerHTML = "Enter the safe password!";
  text.style.color = "#fff";
});
