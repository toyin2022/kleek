const arr = [
  { id: 1, name: "toyin ", lastname: "oni " },
  { id: 2, name: "ronaldo ", lastname: "cristiano " },
  { id: 3, name: "Messi ", lastname: "Lionel " },
  { id: 4, name: "Silva ", lastname: "Thiago " },
];
// const each = arr.forEach((players) => {
//   console.log(players.name);
// });
let name = "";
let lname = "";
const display = arr.map((goats) => {
  console.log(goats.id);
  name += goats.name;

  lname += goats.lastname;
});
document.querySelector(".name").innerHTML = name;
document.querySelector(".lastname").innerHTML = lname;
