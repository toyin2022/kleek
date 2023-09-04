let yourNumber = Number(prompt("pick a number"));

localStorage.setItem("number", JSON.stringify(yourNumber));
console.log(typeof yourNumber);
document.title = "javascript";

//..                                // get the three buttons and screen

const screen = document.querySelector("#display");
const addButton = document.querySelector(".add");
const subButton = document.querySelector(".remove");
const resetButton = document.querySelector(".reset");
// console.log(document.querySelector(".add"));

//....                                 // set a display to your screen
screen.innerHTML = `<div style="text-align: center; font-weight: 700">your number is: <br /> <h1 style="color: red">${yourNumber}</h1></div>`;

//.                                     // add events to button
addButton.addEventListener("click", function () {
  yourNumber = yourNumber + 1;
  screen.innerHTML = `<div style="text-align: center; font-weight: 700">your number is: <br /> <h1 style="color: red">${yourNumber}</h1></div>`;
  console.log(yourNumber);
});
resetButton.addEventListener("click", function () {
  yourNumber = localStorage.getItem("yourNumber");
  const rr = Number(yourNumber);
  console.log(typeof rr);
  //   parseInt(yourNumber);
  screen.innerHTML = `<div style="text-align: center; font-weight: 700">your number is: <br /> <h1 style="color: red">${rr}</h1></div>`;
});

// console.log(window);
// const str = "200";
// let num = Number(str);
// num = num + 100;
// console.log(num);
// console.log(typeof num);
