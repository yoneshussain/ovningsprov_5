// FRÅGA 5 – DOM-rendering och map (3p)
//
// Skriv renderCourses(courses, container).
//
// Krav:
// - Använd map() för att omvandla varje kurs till ett DOM-element.
// - Varje kurskort ska visa titel och antal timmar.
// - Varje kort ska ha en knapp med texten "Markera klar".
// - Klick på knappen ska lägga till klassen "completed" på kortet
//   och ändra knappens text till "Klar!".
// - Lägg in alla kort i container. Ersätt tidigare innehåll vid ny rendering.
//
// Du får använda container.append(...elements) eller ett DocumentFragment.

const courses = [
  { id: 1, title: "JavaScript", hours: 18 },
  { id: 2, title: "HTTP och API:er", hours: 10 },
  { id: 3, title: "Tillgänglighet", hours: 7 },
];

export const renderCourses = (courses, container) => {
  container.innerHTML = "";
  // TODO: använd map() för att skapa DOM-element
  const li = courses.map((course) => {
    const li = document.createElement("li");
    const title = document.createElement("h3");
    const hours = document.createElement("p");
    const button = document.createElement("button");

    title.textContent = course.title;
    hours.textContent = course.hours;
    button.textContent = "Markera klar";

    button.addEventListener("click", () => {
      li.classList.add("completed");
      button.textContent = "Klar!";
    });

    li.append(title, hours, button);

    return li;
  });

  container.append(...li);
};

export function run() {
  const container = document.querySelector("#course-list");
  renderCourses(courses, container);
  console.log("Q5 – DOM-rendering: kontrollera kurskorten på sidan.");
}
