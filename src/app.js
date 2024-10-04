/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuseGene = document.querySelector("#excuses4geeks");
window.onload = function() {
  return (excuseGene.innerHTML = generatingExcuses());
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

const getRandomExcuses = Array => Math.floor(Math.random() * Array.length);
const getRandomValue = Array => Array[getRandomExcuses(Array)];
const generatingExcuses = () => {
  return `${getRandomValue(who)} ${getRandomValue(action)} ${getRandomValue(
    what
  )} ${getRandomValue(when)}`;
};
