import { run as run1 } from "./questions/question1.js";
import { run as run2 } from "./questions/question2.js";
import { run as run3 } from "./questions/question3.js";
import { run as run4 } from "./questions/question4.js";
import { run as run5 } from "./questions/question5.js";
import { run as run6 } from "./questions/question6.js";
import { run as run7 } from "./questions/question7.js";
import { run as run8 } from "./questions/question8.js";
import { run as run9 } from "./questions/question9.js";
import { run as run10 } from "./questions/question10.js";

const runners = {
  1: run1, 2: run2, 3: run3, 4: run4, 5: run5,
  6: run6, 7: run7, 8: run8, 9: run9, 10: run10,
};

const descriptions = {
  1: "Beräkning av biljettpris med villkor och validering.",
  2: "Transformera, filtrera och hitta poster i en array.",
  3: "Summera ordervärden med reduce.",
  4: "Uppdatera objekt utan att mutera originaldata.",
  5: "Skapa DOM-element från en array och hantera klick.",
  6: "Hantera ett formulär med submit-event.",
  7: "Hämta och visa data med fetch och async/await.",
  8: "Hantera fördröjda Promises parallellt.",
  9: "Modellera en workshop med klass, getters och validering.",
  10: "Importera och använda funktioner från en separat modul.",
};

const select = document.querySelector("#question-select");
const runButton = document.querySelector("#run-button");
const status = document.querySelector("#status");
const description = document.querySelector("#task-description");

const updateDescription = () => {
  description.textContent = descriptions[select.value];
};

select.addEventListener("change", updateDescription);
updateDescription();

runButton.addEventListener("click", async () => {
  const questionNumber = Number(select.value);
  status.textContent = `Kör fråga ${questionNumber}…`;
  console.clear();
  document.querySelector("#task-list").replaceChildren();
  document.querySelector("#course-list").replaceChildren();
  document.querySelector("#comments-output").replaceChildren();
  document.querySelector("#form-message").textContent = "";

  try {
    await runners[questionNumber]();
    status.textContent = `Fråga ${questionNumber} kördes. Kontrollera Console och testytan.`;
  } catch (error) {
    console.error(error);
    status.textContent = `Ett fel uppstod i fråga ${questionNumber}. Läs felmeddelandet i Console.`;
  }
});
