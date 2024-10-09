/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuseGene = document.querySelector("#excuses4geeks");
window.onload = function() {
  excuseGene.innerHTML = generatingExcuses();
  getChangeColorQuote();
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
let bgColorQuote = ["#ff82ba", "#db8741", "#145c82", "#2099d8", "#75407b"];

const getRandomExcuses = excuse_array =>
  Math.floor(Math.random() * excuse_array.length);
const getRandomValue = excuse_array =>
  excuse_array[getRandomExcuses(excuse_array)];
const getChangeColorQuote = () => {
  const bgExcuse = document.querySelector(".excusecontent");
  let randomColor = bgColorQuote[getRandomExcuses(bgColorQuote)];
  bgExcuse.style.backgroundColor = randomColor;
};

const generatingExcuses = () => {
  return `${getRandomValue(who)} ${getRandomValue(action)} ${getRandomValue(
    what
  )} ${getRandomValue(when)}`;
};
