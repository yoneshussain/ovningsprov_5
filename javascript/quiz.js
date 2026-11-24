const questions = [
  {
    "q": "Vad gör `await` när den används inuti en async-funktion?",
    "options": [
      "Blockerar hela JavaScript-tråden tills värdet är klart.",
      "Pausar fortsättningen av async-funktionen tills Promise har avgjorts.",
      "Startar alltid en ny Web Worker.",
      "Omvandlar automatiskt ett vanligt objekt till en Promise."
    ],
    "a": 1,
    "why": "await pausar den omgivande async-funktionens fortsättning, men blockerar inte hela JavaScript-tråden."
  },
  {
    "q": "Vilken ordning gäller för koden: console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D')?",
    "options": [
      "A, B, C, D",
      "A, C, B, D",
      "A, D, C, B",
      "C, A, D, B"
    ],
    "a": 2,
    "why": "Synkron kod körs först (A, D), därefter microtasks som Promise.then (C), och sedan timer-callbacken (B)."
  },
  {
    "q": "Vad returnerar `Array.prototype.map()`?",
    "options": [
      "Alltid ett enda element.",
      "En ny array med resultatet av callbacken för varje element.",
      "En boolean som anger om alla element matchar.",
      "Samma array, muterad med callbackens returvärden."
    ],
    "a": 1,
    "why": "map skapar en ny array med ett resultat per element i den ursprungliga arrayen."
  },
  {
    "q": "Vad är huvudskillnaden mellan `npm` och `Node.js`?",
    "options": [
      "Node.js är en pakethanterare och npm är en webbläsare.",
      "npm kör JavaScript i webbläsaren medan Node.js formaterar kod.",
      "Node.js är en JavaScript-runtime; npm är ett verktyg för paket och scripts.",
      "De är två namn på exakt samma program."
    ],
    "a": 2,
    "why": "Node.js kan köra JavaScript utanför webbläsaren. npm hanterar paket och projektkommandon."
  },
  {
    "q": "Vad är den viktigaste rollen för `package.json` i ett Node/Vite-projekt?",
    "options": [
      "Att lagra projektmetadata, scripts och beroendedeklarationer.",
      "Att lagra den färdiga webbplatsens HTML.",
      "Att ersätta alla JavaScript-moduler.",
      "Att automatiskt publicera projektet på internet."
    ],
    "a": 0,
    "why": "package.json beskriver projektet, beroenden och scripts som kan köras med npm run."
  },
  {
    "q": "Vilket påstående om `npm install -D vite` stämmer?",
    "options": [
      "Vite installeras som en global systemtjänst.",
      "Vite läggs till som en utvecklingsdependency i projektet.",
      "Vite installeras bara i den aktuella webbläsaren.",
      "Alla projektfiler konverteras automatiskt till TypeScript."
    ],
    "a": 1,
    "why": "-D är kort för --save-dev och lägger paketet bland projektets development dependencies."
  },
  {
    "q": "Vad är syftet med `npm run dev` i ett typiskt Vite-projekt?",
    "options": [
      "Att skapa en produktionsmapp och avsluta servern.",
      "Att ta bort node_modules och installera om alla paket.",
      "Att starta Vites lokala utvecklingsserver.",
      "Att publicera projektet på npm."
    ],
    "a": 2,
    "why": "dev-scriptet startar Vites utvecklingsserver så att projektet kan köras lokalt."
  },
  {
    "q": "Vad gör normalt `npm run build` i ett Vite-projekt?",
    "options": [
      "Skapar en optimerad produktionsbuild, vanligtvis i dist/.",
      "Startar en server som alltid måste vara öppen.",
      "Installerar ESLint och Prettier.",
      "Ändrar alla let till const."
    ],
    "a": 0,
    "why": "Vites build-kommando skapar produktionsfiler, normalt i dist-mappen."
  },
  {
    "q": "Vilket påstående beskriver skillnaden mellan ESLint och Prettier bäst?",
    "options": [
      "ESLint hostar webbplatsen och Prettier hanterar API-anrop.",
      "ESLint analyserar kodregler/problem; Prettier formaterar koden.",
      "ESLint och Prettier är båda JavaScript-ramverk.",
      "Prettier testar att alla funktioner returnerar rätt värde."
    ],
    "a": 1,
    "why": "ESLint hittar regelbrott och potentiella problem; Prettier ger konsekvent kodformat."
  },
  {
    "q": "Varför kan `globals.browser` behövas i ESLint-konfigurationen för frontendkod?",
    "options": [
      "För att tala om att till exempel window och document är globala webbläsarvariabler.",
      "För att installera en webbläsare i Node.js.",
      "För att göra alla variabler till const.",
      "För att göra fetch synkron."
    ],
    "a": 0,
    "why": "Konfigurationen informerar ESLint om miljöglobala namn så att de inte felaktigt markeras som odefinierade."
  },
  {
    "q": "Du vill skapa en ny array med priset för varje produkt multiplicerat med 1,25. Vilket verktyg passar bäst?",
    "options": [
      "find()",
      "forEach()",
      "map()",
      "some()"
    ],
    "a": 2,
    "why": "map passar när du vill transformera varje element till ett motsvarande värde i en ny array."
  },
  {
    "q": "Vad innebär immutability i JavaScript?",
    "options": [
      "Att aldrig skapa nya objekt.",
      "Att undvika att ändra befintliga data direkt och i stället skapa uppdaterade kopior.",
      "Att alla objekt automatiskt fryses av JavaScript.",
      "Att endast använda funktioner utan parametrar."
    ],
    "a": 1,
    "why": "Immutability innebär att originaldata lämnas oförändrad, ofta genom att skapa nya objekt eller arrayer."
  },
  {
    "q": "Vad gäller för `Promise.all([p1, p2, p3])` om alla Promises löses?",
    "options": [
      "Resultat-arrayens ordning följer ordningen i indata-arrayen.",
      "Resultat-arrayens ordning följer alltid vilken Promise som blir klar först.",
      "Bara den snabbaste Promisen returneras.",
      "Alla Promises körs automatiskt en i taget."
    ],
    "a": 0,
    "why": "Promise.all ger en array i samma ordning som input-iterablen, oavsett när Promises blir klara."
  },
  {
    "q": "Vilket påstående om en JavaScript-getter är korrekt?",
    "options": [
      "Den anropas alltid med parenteser, som en vanlig metod.",
      "Den deklareras med `get` och kan läsas som en egenskap.",
      "Den kan inte använda `this`.",
      "Den måste alltid returnera en Promise."
    ],
    "a": 1,
    "why": "En getter definieras med get och läses som en egenskap, exempelvis instance.value."
  },
  {
    "q": "Vilket exempel visar en named import från en ES-modul?",
    "options": [
      "import { formatPrice } from './utils.js';",
      "import formatPrice './utils.js';",
      "require named formatPrice from './utils.js';",
      "export { formatPrice } from './utils.js';"
    ],
    "a": 0,
    "why": "En named import använder klamrar runt det exporterade namnet och anger modulens sökväg."
  }
];

const container = document.querySelector("#quiz-container");
const submitButton = document.querySelector("#submit-quiz");
const result = document.querySelector("#quiz-result");

questions.forEach((question, index) => {
  const section = document.createElement("section");
  section.className = "question";

  const heading = document.createElement("h3");
  heading.textContent = `${index + 1}. ${question.q}`;
  section.append(heading);

  question.options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${index}`;
    input.value = String(optionIndex);

    const text = document.createElement("span");
    text.textContent = option;

    label.append(input, text);
    section.append(label);
  });

  container.append(section);
});

submitButton.addEventListener("click", () => {
  let score = 0;

  questions.forEach((question, index) => {
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    const section = container.children[index];
    const oldFeedback = section.querySelector(".feedback");
    oldFeedback?.remove();

    const feedback = document.createElement("p");
    feedback.className = "feedback";

    if (!selected) {
      feedback.textContent = `Inget svar valt. ${question.why}`;
    } else if (Number(selected.value) === question.a) {
      score += 1;
      feedback.textContent = `Rätt. ${question.why}`;
    } else {
      feedback.textContent = `Inte riktigt. ${question.why}`;
    }

    section.append(feedback);
  });

  result.textContent = `Du fick ${score} av ${questions.length} poäng (${Math.round(score / questions.length * 100)} %).`;
  submitButton.disabled = true;
});
