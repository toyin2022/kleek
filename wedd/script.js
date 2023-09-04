// alert("welcome to javascript");
// Array

const student1 = {
  name: "toyin",
  color: "black",
};

const array = ["toyin", "sam", 43, true, student1];

console.log(array[4]);

const coders = [
  { name: "toyin", color: "black" },
  { name: "michael", color: "green" },
];
console.log(coders[1].name);

const Daniel = {
  writeDan: function (holder) {
    document.write(`${holder}\n`);
  },
};
Daniel.writeDan(coders[1].name);

function calculate() {
  return (you = "jhsdjsd");
}
calculate();
// console.log(you);
console.log(calculate());
Daniel.writeDan(calculate());
// object

// console.log(student1.name);
