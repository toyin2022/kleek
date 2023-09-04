const yourNumber = prompt("what do you want");

// ourDiv.innerHTML = "<h1> our number is 1 </h1>";
// ourDiv.innerHTML = "<h1> our number is 1 </h1>";
// ourDiv.innerHTML = "<h1> our number is 1 </h1>";
// ourDiv.innerHTML = "<h1> our number is 1 </h1>";
// ourDiv.innerHTML = "<h1> our number is 1 </h1>";
// ourDiv.innerHTML = "<h1> our number is 1 </h1>";
// ourDiv.innerHTML = "<h1> our number is 1 </h1>";
// ourDiv.innerHTML = "<h1> our number is 1 </h1>";
// ourDiv.innerHTML = "<h1> our number is 1 </h1>";
let text = "";
for (let i = 1; i <= yourNumber; i++) {
  if (i % 2 === 1) {
    text += `<h4 style="color: red"> our number is ${i} </h4>`;
  } else {
    text += `<h4> our number is ${i} </h4>`;
  }

  console.log(`our number is ${i} `);
}
document.querySelector("#d").innerHTML = text;
// let i = 0;
// while (i < 10) {
//   console.log("The number is " + i);
//   i++;
// }
