# Övningsprov 5 – Avancerad frontendutveckling

Det här provet är en ny, något svårare fortsättning på övningsprov 4. Det följer samma huvudsakliga kursmål och provupplägg som lärarens beskrivning.

## Provupplägg

### Del 1 – Teoriprov
- 15 flervalsfrågor i `quiz.html`
- Ämnen: async JavaScript, Promise/event loop, Node.js/npm, Vite, linting/formatering samt funktionell programmering och OOP.
- Svara på alla frågor och tryck på **Rätta provet** för resultat och förklaringar.

### Del 2 – Praktiskt prov
- 10 uppgifter i separata filer: `javascript/questions/question1.js` till `question10.js`
- Totalt 30 poäng.
- Rekommenderad skrivtid: 3 timmar.
- Sikta på minst 21/30 poäng.

## Starta projektet

1. Öppna den här mappen i VS Code.
2. Öppna terminalen i projektets rot, där `index.html` och `package.json` ligger.
3. Kör:

```bash
npm install
npm run dev
```

4. Öppna adressen som Vite visar, vanligtvis `http://localhost:5173/`.

Projektet använder Vite med `index.html` direkt i roten. Du behöver inte köra `npm create vite` på nytt.

## Så använder du det praktiska provet

1. Välj en fråga i rullistan på startsidan.
2. Läs uppgiftens krav i `README.md` eller i den valda frågefilen.
3. Implementera funktionerna där det står `TODO`.
4. Tryck på **Kör vald fråga** för att köra uppgiftens testanrop.
5. Läs resultatet i webbläsarens utvecklarkonsol (`F12` → Console) och på sidan när uppgiften använder DOM.

Varje frågemodul exporterar en `run()`-funktion. Ändra inte exportnamnet eller importerna i `javascript/app.js`.

## Regler för träningen

- Inget facit ingår.
- Försök först utan att titta på dokumentation.
- Använd modern JavaScript (`const`, `let`, arrow functions, template literals).
- Föredra arraymetoder där de passar.
- Mutera inte originaldata när uppgiften uttryckligen kräver immutability.
- Skriv inte lösningen i `app.js`; lös uppgiften i rätt `questionN.js`.
- Försök motivera varför du väljer en viss metod, inte bara att koden fungerar.

## Poängfördelning

| Fråga | Område | Poäng |
|---|---|---:|
| 1 | Funktioner, villkor och beräkningar | 3 |
| 2 | map, filter och find | 3 |
| 3 | reduce | 3 |
| 4 | Spread, rest och immutability | 3 |
| 5 | DOM-rendering och map | 3 |
| 6 | DOM-events och formulär | 3 |
| 7 | Fetch, async/await och felhantering | 4 |
| 8 | Promise, setTimeout och Promise.all | 2 |
| 9 | Klasser, getters och validering | 3 |
| 10 | ES-moduler och funktioner | 3 |
| **Totalt** | | **30** |

## När du är klar

Skicka GitHub-länken till repot eller ladda upp ZIP-filen med dina ändringar. Be om strikt rättning fråga för fråga.
