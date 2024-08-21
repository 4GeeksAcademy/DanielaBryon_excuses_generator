import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird", "An alien"];
let action = ["ate", "peed", "crushed", "broke", "stole"];
let what = ["my homework", "my phone", "the car", "my shoes"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function generateExcuse() {
  let excuse = "";

  const selectedOption = document.getElementById("excuseSelect").value;

  switch (selectedOption) {
    case "1":
      excuse = `${who[Math.floor(Math.random() * who.length)]} ${
        action[Math.floor(Math.random() * action.length)]
      } ${what[Math.floor(Math.random() * what.length)]} ${
        when[Math.floor(Math.random() * when.length)]
      }.`;
      break;
    case "2":
      excuse = `${who[Math.floor(Math.random() * who.length)]} ${
        action[Math.floor(Math.random() * action.length)]
      } ${what[Math.floor(Math.random() * what.length)]} ${
        when[Math.floor(Math.random() * when.length)]
      }.`;
      break;
    case "3":
      excuse = `${who[Math.floor(Math.random() * who.length)]} ${
        action[Math.floor(Math.random() * action.length)]
      } ${what[Math.floor(Math.random() * what.length)]} ${
        when[Math.floor(Math.random() * when.length)]
      }.`;
      break;
    default:
      excuse = "Please select a valid excuse option.";
  }

  document.getElementById("excuse").innerHTML = excuse;
}

document
  .getElementById("generateBtn")
  .addEventListener("click", generateExcuse);
